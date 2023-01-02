<template>
  <list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <magic-ui-container v-for="it in list" :key="it.id" :config="{ items: items }" :payload="it">
      <slot></slot>
    </magic-ui-container>
  </list>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { List } from 'vant';

import { parseJson } from '@tmagic/utils';

import useApp from '../../useApp';

export default defineComponent({
  components: {
    List,
  },
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },

  setup(props) {
    useApp(props);
    const loading = ref(false);
    const finished = ref(false);
    const list = ref<any[]>([]);

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      list.value = [];
      console.log('reload------value');
      setTimeout(() => {
        list.value = parseJson(props.config.dataSource);
        // 加载状态结束
        loading.value = false;
        // 数据全部加载完成
        if (list.value.length >= 1) {
          finished.value = true;
        }
      }, 2000);
    };
    console.log(JSON.parse(JSON.stringify(props.config.items)), 'config-------');

    const filter = (list: any) =>
      list.map((item: any) => {
        if (item.type === 'text') {
          const text = function (app: any) {
            // console.log(app, 'app---====index', props, data);
            return app.payload[item.text] || item.text;
          };
          return {
            ...item,
            text,
          };
        }
        if (item?.items?.length) {
          return {
            ...item,
            items: filter(item.items),
          };
        }
        return item;
      });
    console.log(filter(props.config.items), 'filter(props.config.items)-------');
    const items = computed(() => filter(props.config.items));
    return {
      list,
      finished,
      loading,
      onLoad,
      items,
    };
  },
});
</script>
