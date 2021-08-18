import Kind from './kind';

class Block {
  public readonly _kind = Kind.Block;

  // !TODO: change any to something more specific
  public readonly body: any;

  constructor(body: any) {
    this.body = body;
  }
}

export default Block;
