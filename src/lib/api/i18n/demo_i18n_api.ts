import IInternationalizationApi from './i_i18n_api';

export default class DemoInternationalizationApi implements IInternationalizationApi {
    public async getLocale(locale: string, keys: string[]): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
