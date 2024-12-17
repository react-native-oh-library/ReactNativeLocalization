/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */
import { exportComp as Localize } from 'react-native-localization';
import LocalizeHarmony from './LocalizedStrings.harmony.js';
import { Platform } from 'react-native';

const isIosAndroid = Platform.OS === 'ios' || Platform.OS === 'android';

const exportComp = isIosAndroid ? Localize : LocalizeHarmony;

export default exportComp;