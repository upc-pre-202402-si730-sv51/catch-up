import axios from "axios";
import {LogoApiService} from "../../shared/services/logo-api.service.js";

/**
 * Axios instance
 * @type {axios.AxiosInstance} http - Axios instance with base URL
 */
const http = axios.create({ baseURL: 'https://newsapi.org/v2'});

/**
 * News API key
 * @type {string} NEWS_API_KEY - The API key for the News API
 */
const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

/**
 * News API Service
 * @class NewsApiService
 * @description
 * Provides a service to get news articles from the News API.
 * It contains the following properties:
 * @property {string} apiKey - The API key for the News API
 * @property {LogoApiService} logoApi - The Logo API Service
 * It contains the following methods:
 * @method getSources - Gets the sources of news articles
 * @method getArticlesForSource - Gets the articles for a specific source
 * @method getUrlToLogo - Gets the url of the logo of a source
 */
export class NewsApiService {
    apiKey = NEWS_API_KEY;
    logoApi = new LogoApiService();

    /**
     * Gets the sources of news articles
     * @returns {Promise} - The sources of news articles
     * @method getSources
     */
    getSources() {
        return http.get(`top-headlines/sources?apiKey=${this.apiKey}`);
    }

    /**
     * Gets the articles for a specific source
     * @param sourceId - The id of the source
     * @returns {Promise<axios.AxiosResponse<any>>} - The articles for the source
     * @method getArticlesForSource
     */
    getArticlesForSource(sourceId) {
        return http.get(`top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }

    /**
     * Gets the url of the logo of a source
     * @param {Source} source - The source of the article
     * @returns {string} - The url of the logo of the source
     * @method getUrlToLogo
     */
    getUrlToLogo(source) {
        return this.logoApi.getUrlToLogo(source);
    }
}
