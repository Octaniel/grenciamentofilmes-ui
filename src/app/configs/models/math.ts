export class Mathematic {
  round(number: number, precision: number) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.ceil(tempNumber);
    return roundedTempNumber / factor;
  };
}
