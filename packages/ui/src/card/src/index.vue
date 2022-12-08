<template>
  <div>
    <div :style="{ color: color }" @click="clickHandler">
      {{ config.text }}
      ---文本和描叙的中文文案----
      {{ config.desc }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, defineExpose, ref } from 'vue';

import Core from '@tmagic/core';

import useApp from '../../useApp';

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
    const app: Core | undefined = useApp(props);
    const node = app?.page?.getNode(props.config.id);
    console.log(props, 'props=======card');
    const color = ref('red');
    const clickHandler = () => {
      color.value = 'blue';
    };

    const changeColor = () => {
      console.log('changeColor====');
      color.value = 'green';
      // 联动的 时候需要传 node 参数

      app?.emit('card:changeColor', node);
    };

    defineExpose({
      changeColor,
    });
    return {
      color,
      clickHandler,
      changeColor,
    };
  },
});
</script>
