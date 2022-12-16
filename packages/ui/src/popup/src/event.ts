export default {
  methods: [
    {
      label: '打开蒙层',
      value: 'openPopup',
    },
    {
      label: '关闭蒙层',
      value: 'closePopup',
    },
  ],
  events: [
    {
      label: '选中',
      value: 'picker:select',
    },
    {
      label: '确定',
      value: 'picker:confirm',
    },
    {
      label: '取消',
      value: 'picker:cancel',
    },
  ],
};
