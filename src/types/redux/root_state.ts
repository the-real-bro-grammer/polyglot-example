import I18nState from './i18n/state';
import { PageSettingsState } from './page/state';

export interface RootState {
    pageSettingsState: PageSettingsState;
    i18nState: I18nState;
}
