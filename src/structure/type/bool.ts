import Kind from '../kind';

class Bool {
  public readonly _kind = Kind.Bool;

  public readonly body: boolean;

  constructor(body: boolean) {
    this.body = body;
  }
}

export default Bool;
