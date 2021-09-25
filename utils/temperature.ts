export enum Units {
  fahrenheit = '°F',
  celsius = '°C',
  kelvin = 'K',
}

class From {
  constructor(private input: number) {}

  from(n: Units) {
    switch (n) {
      case Units.fahrenheit:
        return new To(((this.input - 32) * 5) / 9);
      case Units.celsius:
        return new To(this.input + 273.15);
      case Units.kelvin:
        return new To(this.input);
    }
  }
}

class To {
  constructor(private kelvin: number) {}

  to(n: Units) {
    switch (n) {
      case Units.fahrenheit:
        return (((this.kelvin - 273.15) * 9) / 5 + 32).toFixed(2);
      case Units.celsius:
        return (this.kelvin - 273.15).toFixed(2);
      case Units.kelvin:
        return (this.kelvin - 273.15).toFixed(2);
    }
  }
}

export const temperature = (input: number) => new From(input);
