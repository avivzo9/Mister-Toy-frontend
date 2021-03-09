<script>
import { Line } from 'vue-chartjs'
export default {
  props: ['types', 'prices'],
  extends: Line,
  mounted () {
    this.renderChart({
      labels: this.types,
      datasets: [
        {
          label: 'inventory',
          backgroundColor: '#f87979',
          data: this.prices
        }
      ]
    })
  },
}
</script>