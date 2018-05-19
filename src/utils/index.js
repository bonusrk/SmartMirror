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
   * create a key with preset in localStorage
   * @param preset {object} preset to setup in localStorage
   */
  this.setupStorage = function (preset) {
    this.storage.setItem(this.key, JSON.stringify(preset));
  };

  /**
   * Modify or read localStorage property
   * @param value {string}
   * @param key {string}
   */
  this.prop = function (value, key) {
    if (typeof value !== 'string') {
      throw new Error('"value" should be a type of "string" ');
    }
    if (!key) {
      return JSON.parse(this.storage.getItem(this.key))[value];
    } else {
      if (typeof key !== 'string') {
        throw new Error('"key" should be a type of "string"');
      }
      const item = JSON.parse(this.storage.getItem[this.key]);
      item[key] = value;
      return this.storage.setItem(this.key, JSON.stringify(item));
    }
  };
}

export { LsHelper };
