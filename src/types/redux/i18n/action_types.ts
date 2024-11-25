import { BaseAction } from '@/types/redux/base_action';

export const I18N_LOCALE_UPDATING = 'I18N_LOCALE_UPDATING';
export const I18N_LOCALE_UPDATED = 'I18N_LOCALE_UPDATED';

export interface I18nLocaleUpdatingAction extends BaseAction<typeof I18N_LOCALE_UPDATING> {}
export interface I18nLocaleUpdatedAction extends BaseAction<typeof I18N_LOCALE_UPDATED> {}

export type I18nAction = I18nLocaleUpdatingAction | I18nLocaleUpdatedAction;
