import Kind from '../kind';

class String {
  public readonly _kind = Kind.String;

  public readonly body: string;

  constructor(body: string) {
    this.body = body;
  }
}

export default String;
