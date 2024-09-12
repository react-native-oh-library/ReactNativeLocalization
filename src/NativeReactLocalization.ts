import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

interface Constants {
    language: string
}

export interface Spec extends TurboModule {
    getLanguage: (cb: (err: string, language: string)=> void) => void
    getConstants: () => Object
} 
 
export default TurboModuleRegistry.get<Spec>('ReactLocalizationNativeModule') as Spec | null;