const utils = {
  inherits: function (childClass, parentClass) {
      function Surrogate() {};
      Surrogate.prototype = parentClass.prototype;
      childClass.prototype = new Surrogate();
      childClass.prototype.constructor = childClass;
  }
}

module.exports = utils
