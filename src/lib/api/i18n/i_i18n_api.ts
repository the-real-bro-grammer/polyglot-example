export default interface IInternationalizationApi {
    getLocale(locale: string, keys: string[]): Promise<void>;

    getPhrase(locale: string, key: string): Promise<void>;

    getPhrases(locale: string, keys: string[]): Promise<void>;
}
