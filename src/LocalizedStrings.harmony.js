/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */
"use strict";
import { TurboModuleRegistry } from "react-native";
import LocalizedStringsCore from "react-localization";
/**
 * Import the native module
 */
const localization = TurboModuleRegistry.get('ReactLocalizationNativeModule');
/**
 * Check if the native module has been correctly initialized
 */
if (!localization) {
    console.error(
        "Something went wrong initializing the native ReactNativeLocalization module.\nPlease check your configuration.\nDid you run 'react-native link'?"
    );
}

/**
 * Custom Interface Language method returned by native code
 */
function getInterfaceLanguage() {
    return localization.getConstants().language.replace(/_/g, "-");
}

/**
 * Extend the react-localization class overriding the getInterfaceLanguage method
 * to use the native module
 */
export default class LocalizedStrings extends LocalizedStringsCore {
    constructor(props) {
        super(props, { customLanguageInterface: getInterfaceLanguage });
    }
}
