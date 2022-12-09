<script lang="ts">
import { defineComponent, h } from 'vue';
import { Empty } from 'vant';

import 'vant/lib/index.css';
export default defineComponent({
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
    model: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    return {
      configs: props.config,
    };
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
