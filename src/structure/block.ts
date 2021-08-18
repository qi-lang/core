/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

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
