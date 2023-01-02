<template>
  <picker :columns="columns" @cancel="handleCancel" @confirm="handleConfirm" :title="config.title" @select="onSelect" />
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { Picker } from 'vant';

import Core from '@tmagic/core';
import { parseJson } from '@tmagic/utils';

import useApp from '../../useApp';
export default defineComponent({
  components: {
    Picker,
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
    console.log(props, 'props.columns');
    const app: Core | undefined = useApp(props);
    const node = app?.page?.getNode(props.config.id);
    const selectValue = ref({});
    const handleConfirm = () => {
      console.log('confirm', node);
      if (app) {
        app.emit('picker:confirm', node, selectValue);
      }
    };

    const handleCancel = () => {
      if (app) {
        app.emit('picker:cancel', node);
      }
    };

    const onSelect = (action: any) => {
      selectValue.value = action;
      console.log(action, 'select');
      if (app) {
        app.emit('picker:select', node, action);
      }
    };

    const columns = computed(() => (props.config.columns ? parseJson(props.config.columns) : []));
    return {
      columns,
      handleConfirm,
      handleCancel,
      onSelect,
    };
  },
});
</script>
