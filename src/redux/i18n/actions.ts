import { I18N_LOCALE_UPDATING, I18nAction } from '@/types/redux/i18n/action_types';
import I18nState from '@/types/redux/i18n/state';
import { ThunkAction } from '@reduxjs/toolkit';
import { ThunkArguments } from '../thunk_arguments';

type I18nThunkAction<ReturnType = void> = ThunkAction<ReturnType, I18nState, ThunkArguments, I18nAction>;

export const setLocale =
    (locale: string): I18nThunkAction =>
    async (dispatch, getState, thunkArgs: ThunkArguments) => {
        const { i18nApi } = thunkArgs;
        const i18nState = await i18nApi.getLocale(locale, []);
        dispatch({ type: I18N_LOCALE_UPDATING, payload: i18nState });
    };
