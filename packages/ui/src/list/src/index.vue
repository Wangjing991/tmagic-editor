<!-- List.vue -->
<template>
  <div>
    <span @click="onClick">List初始化:{{ oneText }}</span>
    <span :style="{ color: config.color }">{{ config.text }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Core from '@tmagic/core';

import useApp from '../../useApp';

export default defineComponent({
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },

  setup(props) {
    const oneText = ref('oneText');
    const app: Core | undefined = useApp(props);
    const node2 = app?.page?.getNode(props.config.id);

    const changeText = (node: any, testStr: string) => {
      debugger;
      oneText.value = testStr ? testStr : 'xxxxxxxTWOTEXTxxxxxxx';
      if (app) {
        app.emit('change:text', node2, `测试用参数:${new Date().toString}`);
      }
    };

    return {
      oneText,
      changeText,
    };
  },
});
</script>
