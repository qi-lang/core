import Kind from '../kind';

class Tuple {
  public readonly _kind = Kind.Tuple;

  public readonly body: Array<any>;

  constructor(body: Array<any>) {
    this.body = body;
  }
}

export default Tuple;
