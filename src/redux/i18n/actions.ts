import { I18N_LOCALE_UPDATING, I18nAction } from '@/types/redux/i18n/action_types';
import { RootState } from '@/types/redux/root_state';
import { ThunkAction } from '@reduxjs/toolkit';
import { ThunkArguments } from '../thunk_arguments';

type I18nThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, ThunkArguments, I18nAction>;

export const setLocale =
    (locale: string): I18nThunkAction =>
    async (dispatch, getState, thunkArgs: ThunkArguments) => {
        const { i18nApi } = thunkArgs;
        const i18nState = await i18nApi.getLocale(locale, []);
        dispatch({ type: I18N_LOCALE_UPDATING, payload: i18nState });
    };

export const requestPhrase =
    (key: string): I18nThunkAction =>
    async (dispatch, getState, thunkArgs: ThunkArguments) => {
        const { i18nApi } = thunkArgs;

        const state = getState();

        console.log('state', state);

        //const i18nState = i18nApi.getPhrase(state.i18nState.polyglot.locale.name, key).then(() => {});
    };
