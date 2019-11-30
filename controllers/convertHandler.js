/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  this.regX = /^(?:([\d]+(?:\.?[\d]+)?(?:\/[\d]+(?:\.?[\d]+)?)?))?([a-zA-Z]+)?$/;
  this.validInput = ['gal', 'l', 'mi', 'km', 'lbs', 'kg', 'GAL', 'L', 'MI', 'KM', 'LBS', 'KG'];

  this.getNum = function (input) {

    var match = input.match(this.regX);
    if (match) {
      return eval(match[1]);
    }
  };

  this.getUnit = function (input) {
    var match = input.match(this.regX);
    if (match) {
      var input = match[2];
      if (this.validInput.includes(input)) {
        return input;
      }
      return undefined;
    }
    return undefined;
  };

  this.getReturnUnit = function (initUnit) {
    var result;

    return result;
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
