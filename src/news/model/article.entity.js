import {Source} from "./source.entity.js";

/**
 * Article entity
 * @class Article
 * @description
 * Represents a news article. It contains the following properties:
 * @property {string} title - The title of the article
 * @property {string} description - The description of the article
 * @property {string} url - The url of the article
 * @property {string} urlToImage - The url of the image of the article
 * @property {Source} source - The source of the article
 * @property {Date} publishedAt - The date when the article was published
 */
export class Article {
    /**
     * Creates an instance of Article
     * @param {string} [title =''] - The title of the article
     * @param {string} [description =''] - The description of the article
     * @param {string} [url =''] - The url of the article
     * @param {string} [urlToImage =''] - The url of the image of the article
     * @param {object} [source =null] - The source of the article
     * @param {string} [publishedAt =''] - The date when the article was published
     * @returns {Article} - An instance of Article
     */
    constructor(title = '', description = '', url = '', urlToImage = '', source = null, publishedAt = '') {
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.source = source ? new Source(source) : null;
        this.publishedAt = new Date(publishedAt);
    }
}