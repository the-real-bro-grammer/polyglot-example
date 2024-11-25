import { RootState } from '../types/redux/root_state';
import { getInitialI18nState } from './i18n/initial_state';
import { getInitialPageSettingsState } from './page/initial_state';

export const initialRootState: RootState = {
    pageSettingsState: getInitialPageSettingsState(),
    i18nState: getInitialI18nState()
};
