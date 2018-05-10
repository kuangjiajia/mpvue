<script lang="ts">
  import Vue, {ComponentOptions} from 'vue'
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'this is a typescript project now'
      }
    }
  } as ComponentOptions<Vue>
</script>