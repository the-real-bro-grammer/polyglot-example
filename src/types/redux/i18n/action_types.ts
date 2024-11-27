import { BaseAction } from '@/types/redux/base_action';

export const I18N_LOCALE_UPDATING = 'I18N_LOCALE_UPDATING';
export const I18N_LOCALE_UPDATED = 'I18N_LOCALE_UPDATED';
export const I18N_LOCALE_UPDATE_FAILED = 'I18N_LOCALE_UPDATE_FAILED';

export const I18N_CONTENT_FETCHING = 'I18N_CONTENT_FETCHING';
export const I18N_CONTENT_FETCHED = 'I18N_CONTENT_FETCHED';

export interface I18nLocaleUpdatingAction extends BaseAction<typeof I18N_LOCALE_UPDATING> {}
export interface I18nLocaleUpdatedAction extends BaseAction<typeof I18N_LOCALE_UPDATED> {}

export type I18nAction = I18nLocaleUpdatingAction | I18nLocaleUpdatedAction;
