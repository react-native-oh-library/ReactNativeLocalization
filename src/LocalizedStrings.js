import { exportComp as Localize } from 'react-native-localization';
import LocalizeHarmony from './LocalizedStrings.harmony.js';
import { Platform } from 'react-native';

const isIosAndroid = Platform.OS === 'ios' || Platform.OS === 'android';

const exportComp = isIosAndroid ? Localize : LocalizeHarmony;

export default exportComp;