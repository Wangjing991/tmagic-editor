<template>
  <dropdown-menu>
    <dropdown-item v-model="value" :options="options" @change="handleChange" />
  </dropdown-menu>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { DropdownItem, DropdownMenu } from 'vant';

import { parseJson } from '@tmagic/utils';

export default defineComponent({
  components: {
    DropdownMenu,
    DropdownItem,
  },
  emits: ['change'],
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

  setup(props, { emit }) {
    const value = ref(props.config.defaultValue);
    const options = computed(() => (props.config.options ? parseJson(props.config.options) : []));
    const handleChange = (val: any) => {
      emit('change', props.config.key, val);
    };
    return {
      value,
      options,
      handleChange,
    };
  },
});
</script>
<style lang="scss">
.van-dropdown-menu__bar {
  height: 100% !important;
}
</style>
