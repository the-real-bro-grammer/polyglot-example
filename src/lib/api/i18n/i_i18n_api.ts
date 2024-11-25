export default interface IInternationalizationApi {
    getLocale(locale: string, keys: string[]): Promise<void>;
}
