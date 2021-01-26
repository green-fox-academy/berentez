// We start with a base, abstract class Instrument.
// it reserves (e.g. protected) the name of the instrument
// it should provide a play() method.

abstract class Instrument {
  protected _instrumentName: string;

  get instrumentName(): string {
    return this._instrumentName;
  }
  play() {}
}
