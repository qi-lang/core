import Kind from './kind';
import Base from './base';

export class Ident implements Base {
  public readonly _kind = Kind.Ident;

  public readonly body: string;

  public constructor(body: string) {
    this.body = body;
  }
}

export function createIdent(body: string) {
  return new Ident(body);
}
