/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import Kind from '../kind';

class Number {
  public readonly _kind = Kind.Number;

  public readonly body: number;

  constructor(body: number) {
    this.body = body;
  }
}

export default Number;
