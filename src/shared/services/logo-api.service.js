/**
 * Logo API Service
 * @class LogoApiService
 * @description
 * Provides a service to get the url of the logo of a source
 */
export class LogoApiService {
    /**
     * Gets the url of the logo of a source
     * @param {Source} source - The source of the article
     * @returns {string} - The url of the logo of the source
     */
    getUrlToLogo(source) {
        return `https://logo.clearbit.com/${new URL(source.url).hostname }`;
    }
}