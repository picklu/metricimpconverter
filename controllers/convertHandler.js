/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  this.regX = /^(?:([\d]+(?:\.?[\d]+)?(?:\/[\d]+(?:\.?[\d]+)?)?))?([a-zA-Z]+)?$/;
  this.input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
  this.expect = ['l', 'gal', 'km', 'mi', 'kg', 'lbs'];

  this.getNum = function (input) {

    var match = input.match(this.regX);
    if (match) {
      return eval(match[1]);
    }
  };

  this.getUnit = function (input) {
    var match = input.match(this.regX);
    var input = match[2] ? match[2].toLowerCase() : undefined;
    input = this.input.includes(input) ? input : undefined;
    return input;
  };

  this.getReturnUnit = function (initUnit) {
    var index = this.input.indexOf(initUnit);
    return this.expect[index];
  };

  this.spellOutUnit = function (unit) {
    var result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };

}

module.exports = ConvertHandler;
