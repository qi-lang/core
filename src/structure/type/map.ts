import Kind from '../kind';
import Pair from './pair';

class Map {
  public readonly _kind = Kind.Map;

  public readonly body: Array<Pair>;

  constructor(body: Array<Pair>) {
    this.body = body;
  }
}

export default Map;
