<template>
  <action-sheet :actions="actions" v-model:show="visible" :title="config.title" @select="onSelect" />
</template>
<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { ActionSheet } from 'vant';

import Core from '@tmagic/core';
import type { MNode } from '@tmagic/schema';
import { parseJson } from '@tmagic/utils';

import useApp from '../../useApp';

export default defineComponent({
  components: {
    ActionSheet,
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
    const actions = ref([]);
    const app: Core | undefined = useApp(props);
    const node = app?.page?.getNode(props.config.id);

    const openSheet = () => {
      visible.value = true;
    };

    const closeSheet = () => {
      visible.value = false;
    };

    const onSelect = (action: any) => {
      console.log(action, 'select');
      if (app) {
        app.emit('actionSheet:select', node, action);
      }
    };

    app?.on('editor:select', (info, path) => {
      if (path.find((node: MNode) => node.id === props.config.id)) {
        openSheet();
      } else {
        closeSheet();
      }
    });

    watchEffect(() => {
      actions.value = props.config.actions ? parseJson(props.config.actions) : [];
    });

    return {
      visible,
      actions,
      openSheet,
      closeSheet,
      onSelect,
    };
  },
});
</script>
