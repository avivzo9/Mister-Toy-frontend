<script>
import { Line } from "vue-chartjs";
Chart.defaults.global.defaultFontColor = "#faffec";
Chart.defaults.global.defaultFontSize = 15
Chart.defaults.global.defaultFontFamily = 'sticky'
export default {
  props: ["types", "prices"],
  extends: Line,
  mounted() {
    this.renderChart({
      labels: this.types,
      datasets: [
        {
          label: ["Types prices"],
          backgroundColor: "#faffec",
          data: this.prices,
        },
      ],
    });
  },
};
</script>