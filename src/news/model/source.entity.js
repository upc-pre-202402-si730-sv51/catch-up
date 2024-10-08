/**
 * Source entity
 * @class Source
 * @description
 * Represents a source of news. It contains the following properties:
 * @property {string} id - The unique identifier of the source
 * @property {string} name - The name of the source
 * @property {string} description - The description of the source
 * @property {string} url - The url of the source
 * @property {string} category - The category of the source
 * @property {string} language - The language of the source
 * @property {string} country - The country of the source
 * @property {string} urlToLogo - The url of the logo of the source
 */
export class Source {
    /**
     * Creates an instance of Source
     * @param {string} [id =''] - The unique identifier of the source
     * @param {string} [name =''] - The name of the source
     * @param {string} [description =''] - The description of the source
     * @param {string} [url =''] - The url of the source
     * @param {string} [category =''] - The category of the source
     * @param {string} [language =''] - The language of the source
     * @param {string} [country =''] - The country of the source
     * @returns {Source} - An instance of Source
     */
    constructor({id = '', name = '', description = '', url = '', category = '', language = '', country = ''}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.url = url;
        this.category = category;
        this.language = language;
        this.country  = country;
        this.urlToLogo = null;
    }
}