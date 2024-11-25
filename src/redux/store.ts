import DemoInternationalizationApi from '@/lib/api/i18n/demo_i18n_api';
import { BaseAction } from '@/types/redux/base_action';
import { configureStore } from '@reduxjs/toolkit';
import { ReducersMapObject, Store } from 'redux';
import { AppAction } from '../types/redux/action_types';
import { RootState } from '../types/redux/root_state';
import { i18nReducer } from './i18n/reducers';
import { initialRootState } from './initial_state';
import { pageSettingsReducer } from './page/reducers';
import { ThunkArguments } from './thunk_arguments';

const thunkArgs: ThunkArguments = {
    i18nApi: new DemoInternationalizationApi()
};

const reducer: ReducersMapObject<RootState, BaseAction, RootState> = {
    pageSettingsState: pageSettingsReducer,
    i18nState: i18nReducer
};

const storeConfigured: Store<RootState, AppAction> = configureStore({
    reducer,
    preloadedState: initialRootState,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: thunkArgs
            }
        })
});

export default storeConfigured;
