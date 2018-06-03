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
  this.init = function (preset) {
    if (!this.storage.getItem(this.key)) {
      this.storage.setItem(this.key, JSON.stringify(preset));
    }
  };

  /**
   * Read localStorage key data and return it like object
   * @returns {object} localStorage key string, converted to object
   */
  this.read = function () {
    return JSON.parse(this.storage.getItem(this.key));
  };

  /**
   * Write data to localStorage key
   * @param data {object} object to store inside localStorage
   */
  this.write = function (data) {
    this.storage.setItem(this.key, JSON.stringify(data));
  };

  /**
   * Clear localStorage from our key
   */
  this.delete = function () {
    this.storage.removeItem(this.key);
  };

}

export { LsHelper };
