/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  this.regX = /^([\d\/\.]+)?([a-zA-Z]+)?$/;
  this.regxNumber = /^\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?$/;
  this.inputUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
  this.expectedUnits = ['l', 'gal', 'km', 'mi', 'kg', 'lbs'];
  this.unitSpelling = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms'];

  this.getNum = function (input) {

    var match = input.match(this.regX);
    var number = match && match[1] ? match[1].match(this.regxNumber) : undefined;
    number = number && number[0] ? eval(number[0]) : undefined;
    return number ? Number(number.toFixed(5)) : undefined;
  };

  this.getUnit = function (input) {
    var match = input.match(this.regX);
    var unit = match && match[2] ? match[2].toLowerCase() : undefined;
    unit = this.inputUnits.includes(unit) ? unit : undefined;
    return unit;
  };

  this.getReturnUnit = function (initUnit) {
    var index = this.inputUnits.indexOf(initUnit);
    return this.expectedUnits[index];
  };

  this.spellOutUnit = function (unit) {
    var index = this.inputUnits.indexOf(unit);
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

    return Number(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    return result;
  };

}

module.exports = ConvertHandler;
