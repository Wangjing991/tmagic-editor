<template>
  <div class="ui-search">
    <search :placeholder="config.placeholder" @change="handleChange" v-model="value" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Search } from 'vant';

export default defineComponent({
  components: {
    Search,
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
    const value = ref('');
    const handleChange = (val: any) => {
      value.value = val.target.value;
      emit('change', props.config.key, val.target.value);
    };

    return {
      value,
      handleChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.ui-search {
  width: 100%;
  height: 100%;
  .van-search {
    width: 100%;
    height: 100%;
    background-color: #1482f0;
  }
}
</style>
