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

import ActionSheet from './actionSheet';
import Button from './button';
import Container from './container';
import Dropdown from './dropdown';
import Empty from './empty';
import Form from './form';
import Img from './img';
import List from './list';
import Overlay from './overlay';
import Page from './page';
import Picker from './picker';
import Popup from './popup';
import Qrcode from './qrcode';
import Search from './search';
import Test from './test';
import Text from './text';

/**
 * ui组件
 * key: 组件名,不可以用驼峰命名
 */
const ui: Record<string, any> = {
  page: Page,
  container: Container,
  button: Button,
  text: Text,
  img: Img,
  qrcode: Qrcode,
  overlay: Overlay,
  empty: Empty,
  test: Test,
  list: List,
  actionsheet: ActionSheet,
  picker: Picker,
  popup: Popup,
  dropdown: Dropdown,
  search: Search,
  form: Form,
};

export default ui;
