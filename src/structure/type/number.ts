import Kind from '../kind';

class Number {
  public readonly _kind = Kind.Number;

  public readonly body: number;

  constructor(body: number) {
    this.body = body;
  }
}

export default Number;
