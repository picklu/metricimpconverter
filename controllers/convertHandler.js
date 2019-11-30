/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  this.regX = /^(?:([\d]+(?:\.?[\d]+)?(?:\/[\d]+(?:\.?[\d]+)?)?))?([a-zA-Z]+)?$/;
  this.inputUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
  this.expectedUnits = ['l', 'gal', 'km', 'mi', 'kg', 'lbs'];
  this.unitSpelling = ['gallons', 'litters', 'miles', 'kilometers', 'pounds', 'kilograms'];

  this.getNum = function (input) {

    var match = input.match(this.regX);
    if (match) {
      return eval(match[1]);
    }
  };

  this.getUnit = function (input) {
    var match = input.match(this.regX);
    var input = match[2] ? match[2].toLowerCase() : undefined;
    input = this.inputUnits.includes(input) ? input : undefined;
    return input;
  };

  this.getReturnUnit = function (initUnit) {
    var index = this.inputUnits.indexOf(initUnit);
    return this.expectedUnits[index];
  };

  this.spellOutUnit = function (unit) {
    var index = this.inputUnits.indexOf(initUnit);
    return this.unitSpelling[index];
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    var result = null;

    switch (initUnit) {
      case ('gal'):
        result = initNum * galToL;
        break;

      case ('l'):
        result = initNum / galToL;
        break;

      case ('mi'):
        result = initNum * miToKm;
        break;

      case ('km'):
        result = initNum / miToKm;
        break;

      case ('lbs'):
        result = initNum * lbsToKg;
        break;

      case ('kg'):
        result = initNum / lbsToKg;
        break;

    }

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };

}

module.exports = ConvertHandler;
