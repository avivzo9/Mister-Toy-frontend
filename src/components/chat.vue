<template>
  <div v-if="currToy">
    <h1>{{ currToy.name }}</h1>
    <ul v-if="currToy.msgs.length" id="messages">
      <li v-for="(msg, idx) in msgs" :key="idx">
        {{msg.from}}: {{ msg.txt }}
      </li>
    </ul>
    <form id="form" @submit.prevent="sendMsg">
      <input id="input" v-model="msg.txt" autocomplete="off" />
      <button>Send</button>
    </form>
  </div>
</template>

<script>
import io from "socket.io";
import { toyService } from "../services/toy.service";
import { socketService } from "../services/socket.service";

export default {
  props: ["toy"],
  data() {
    return {
      socket: io(),
      currToy: null,
      msg: {
        from: "me",
        txt: "",
      },
    };
  },
  methods: {
    addMsg(msg) {
      this.currToy.msgs.push(msg);
      this.$store.dispatch({type: 'saveToy', toy: this.currToy})
    },
    sendMsg() {
      socketService.emit("chat newMsg", this.msg);
      this.msg = { from: "Me", txt: "" };
    },
    changeTopic(id) {
      socketService.emit("chat topic", id);
    },
  },
  computed: {
      msgs() {
          return this.currToy.msgs
      }
  },
  created() {
    const id = this.$route.params.toyId;
    toyService.getToyById(id).then((toy) => {
      this.currToy = toy;
      this.changeTopic(toy._id);
    });
    socketService.on("chat addMsg", this.addMsg);
  },
  destroyed() {
    socketService.off("chat addMsg", this.addMsg);
    socketService.terminate();
  },
};
</script>

<style>
#form {
  background: rgba(0, 0, 0, 0.15);
  padding: 0.25rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 3rem;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
}
#input {
  border: none;
  padding: 0 1rem;
  flex-grow: 1;
  border-radius: 2rem;
  margin: 0.25rem;
}
#input:focus {
  outline: none;
}
#form > button {
  background: #333;
  border: none;
  padding: 0 1rem;
  margin: 0.25rem;
  border-radius: 3px;
  outline: none;
  color: #fff;
}

#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
#messages > li {
  padding: 0.5rem 1rem;
}
#messages > li:nth-child(odd) {
  background: #efefef;
}
</style>