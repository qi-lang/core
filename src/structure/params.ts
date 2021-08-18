/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import Kind from './kind';
import Ident from './ident';

class Param {
  public readonly _kind = Kind.Param;

  public readonly ident: Ident;

  // !TODO: change any to something useful
  public readonly body: any;

  constructor(ident: Ident, body: any) {
    this.ident = ident;
    this.body = body;
  }
}

export default Param;
