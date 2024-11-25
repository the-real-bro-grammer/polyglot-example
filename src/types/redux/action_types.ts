import { BaseAction } from './base_action';
import { I18nAction } from './i18n/action_types';
import { PageSettingsAction } from './page/action_types';

export type AppAction = BaseAction | PageSettingsAction | I18nAction;
