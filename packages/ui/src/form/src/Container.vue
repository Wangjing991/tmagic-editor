<template>
  <div
    v-if="display()"
    :id="`${config.id || ''}`"
    :class="`magic-ui-container form-config magic-layout-${config.layout}${
      config.className ? ` ${config.className}` : ''
    }`"
    :style="style"
  >
    <slot></slot>
    <magic-ui-component
      v-for="item in config.items"
      :key="item.id"
      :config="item"
      :payload="payload"
      @change="handleChange"
    ></magic-ui-component>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';

import type { MContainer } from '@tmagic/schema';

import Component from '../../Component.vue';
import useApp from '../../useApp';
import useCommonMethod from '../../useCommonMethod';
export default defineComponent({
  components: {
    'magic-ui-component': Component,
  },

  props: {
    config: {
      type: Object as PropType<MContainer>,
      default: () => ({}),
    },
    payload: {
      type: Object,
      default: () => ({}),
    },
  },

  setup(props) {
    const filter = (list: any) =>
      list.reduce((pre: any, item: any) => {
        pre[item.key] = item.defaultValue;
        return pre;
      }, {});
    const app = useApp(props);
    const node = app?.page?.getNode(props.config.id);
    const values = ref(filter(props.config.items || []));
    const handleChange = (key: string, value: any) => {
      console.log(values, 'values======');
      values.value[key] = value;
      if (app) {
        app.emit('form:change', node, values.value);
      }
    };

    return {
      values,
      handleChange,
      style: computed(() => app?.transformStyle(props.config.style || {})),

      display: () => {
        const displayCfg = props.config?.display;

        if (typeof displayCfg === 'function') {
          return displayCfg(app);
        }
        return displayCfg !== false;
      },
      ...useCommonMethod(props),
    };
  },
});
</script>
