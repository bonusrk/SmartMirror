/**
 *
 * @param storage {object} window.localStorage
 * @constructor
 */
function LsHelper(storage) {
  this.name = 'LsHelper';
  if (!(storage instanceof Storage)) {
    throw new Error(`Argument of ${this.name} should be a window.localStorage`);
  }
  this.storage = storage;

  /**
   *
   * @param preset {object} preset to setup in localStorage
   */
  this.setupStorage = function (preset) {
  };

  /**
   * Modify or read localStorage property
   * @param value {string}
   * @param key {string}
   */
  this.prop = function (value, key) {
    if (typeof value !== 'string' || typeof key !== 'string') {
      throw new Error('"key" and "item" should be a string type');
    }
    if (!key) {
      this.storage.getItem(value);
    } else {
      this.storage.setItem(key, value);
    }
  };
}

export { LsHelper };
