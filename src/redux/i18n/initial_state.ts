import { I18nConstants } from '@/lib/constants';
import { getValueFromStorage } from '@/lib/helpers/storage_helpers';
import I18nState from '@/types/redux/i18n/state';
import Polyglot from 'node-polyglot';

export const getInitialI18nState = (): I18nState => {
    const language = getValueFromStorage(I18nConstants.CURRENT_LANGUAGE, 'en');
    const options: Polyglot.PolyglotOptions = {
        locale: language,
        phrases: {}
    };
    const initialState: I18nState = {
        polyglot: new Polyglot(options)
    };

    return initialState;
};
