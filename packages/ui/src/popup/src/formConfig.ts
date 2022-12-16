/*
 * Tencent is pleased to support the open source community by making TMagicEditor available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default [
  {
    name: 'position',
    text: '弹出位置',
    type: 'select',
    options: [
      { value: 'top', text: 'top' },
      { value: 'bottom ', text: 'bottom' },
      { value: 'left', text: 'left' },
      { value: 'right', text: 'right' },
    ],
  },
  {
    name: 'overlay',
    text: '是否显示遮罩层',
    type: 'select',
    options: [
      { value: true, text: '是' },
      { value: false, text: '否' },
    ],
  },
];
