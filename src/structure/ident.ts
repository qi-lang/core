/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import Kind from './kind';

class Ident {
  public readonly _kind = Kind.Ident;

  public readonly body: string;

  constructor(body: string) {
    this.body = body;
  }
}

export default Ident;
