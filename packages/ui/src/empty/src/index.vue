<script lang="ts">
import { defineComponent, h } from 'vue';
import { Empty } from 'vant';

export default defineComponent({
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  render() {
    const props = {
      image: this.config.image ? this.config.image : undefined,
      description: this.config.description,
    };
    return h(Empty, props);
  },
});
</script>
