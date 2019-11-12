class StringHandler extends String {
  constructor () {
    super();
  }

  /**
   *
   * @param {*} object - Object array that contain data to mapper
   * @param {*} propertyName  - Property name that you need to map
   * @param {*} separator - Rule for 'join' method to separate text on mapper
   */
  objectArrayToString(object, propertyName, separator) {
    return object.map(x => `${x[propertyName]}`).join(separator);
  }
}

module.exports = new StringHandler();