import { I18N_LOCALE_UPDATING, I18nAction } from '@/types/redux/i18n/action_types';
import I18nState from '@/types/redux/i18n/state';
import { Reducer } from '@reduxjs/toolkit/react';
import { getInitialI18nState } from './initial_state';

export const i18nReducer: Reducer<I18nState, I18nAction> = (
    state = getInitialI18nState(),
    action: I18nAction
): I18nState => {
    const { type, payload } = action;

    switch (type) {
        case I18N_LOCALE_UPDATING:
            return {
                ...state,
                ...payload
            };
        default:
            return {
                ...state
            };
    }
};
