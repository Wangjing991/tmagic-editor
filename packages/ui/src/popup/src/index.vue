<template>
  <popup v-model:show="visible" :position="position" :style="{ height: '30%' }" :overlay="config.overlay">
    <magic-ui-container v-if="visible" :config="{ items: config.items }">
      <slot></slot>
    </magic-ui-container>
  </popup>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Popup } from 'vant';

import Core from '@tmagic/core';
import { MNode } from '@tmagic/schema';

import useApp from '../../useApp';
export default defineComponent({
  components: {
    Popup,
  },
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
    const visible = ref(false);
    const position = ref(props.config.position || 'left');
    const app: Core | undefined = useApp(props);

    console.log(props.config.position, 'props.config', position);
    const openPopup = () => {
      visible.value = true;
    };

    const closePopup = () => {
      visible.value = false;
    };

    app?.on('editor:select', (info, path) => {
      if (path.find((node: MNode) => node.id === props.config.id)) {
        openPopup();
      } else {
        closePopup();
      }
    });

    return {
      visible,
      position,
      openPopup,
      closePopup,
    };
  },
});
</script>
