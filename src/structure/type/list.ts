import Kind from '../kind';

class List {
  public readonly _kind = Kind.List;

  public readonly body: Array<any>;

  constructor(body: Array<any>) {
    this.body = body;
  }
}

export default List;
