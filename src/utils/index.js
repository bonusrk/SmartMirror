import axios from 'axios';

/**
 * Handle operations with localStorage
 * @param key {string} key to store in localStorage
 * @param storage {object} window.localStorage
 * @constructor
 */
function LsHelper(storage, key) {
  this.name = 'LsHelper';
  this.key = key;
  if (!(storage instanceof Storage)) {
    throw new Error(`Argument of ${this.name} should be a window.localStorage object`);
  }
  this.storage = storage;

  /**
   * Initialize our local storage key with preset
   * @param preset {object} preset to setup in localStorage
   */
  this.init = async preset => {
    const item = this.storage.getItem(this.key);
    console.log('ITEM===>', item);
    if (!item) {
      console.log('INIT!!!!');
      await this.storage.setItem(this.key, JSON.stringify(preset));
    }
  };

  /**
   * Read localStorage key data and return it like object
   * @returns {object} localStorage key string, converted to object
   */
  this.read = () => JSON.parse(this.storage.getItem(this.key));

  /**
   * Write data to localStorage key
   * @param data {object} object to store inside localStorage
   */
  this.write = data => {
    console.log('WRITE TO LS!!!', data);
    this.storage.setItem(this.key, JSON.stringify(data));
  };

  /**
   * Clear localStorage from our key
   */
  this.delete = () => {
    this.storage.removeItem(this.key);
  };
}

/**
 *
 * @param method {string} method name
 * @param url {string} url string
 * @param params {object} params for request
 * @returns {AxiosPromise}
 */
const apiCall = (method, url, params) => axios({ method, url, params });

export { LsHelper, apiCall };
