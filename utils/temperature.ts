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
        return new To((this.input - 32) / 1.8 + 273.15);
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
        return (this.kelvin - 273.15) * 1.8 + 32;
      case Units.celsius:
        return this.kelvin - 273.15;
      case Units.kelvin:
        return this.kelvin;
    }
  }
}

export const temperature = (input: number) => new From(input);
