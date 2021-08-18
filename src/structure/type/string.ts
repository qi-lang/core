// Copyright Qi Lang 2021. All Rights Reserved.
// Node module: qi-lang-core
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import Kind from '../kind';

class String {
  public readonly _kind = Kind.String;

  public readonly body: string;

  constructor(body: string) {
    this.body = body;
  }
}

export default String;
