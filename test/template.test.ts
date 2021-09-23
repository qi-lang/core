/*
 * Copyright Qi Lang. 2021 All Rights Reserved.
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import { expect } from 'chai';
import { ResultType } from 'arcsecond';

export type Subject = ResultType<any, any, any>;

export function test(subject: Subject, expected: string) {
  if (!subject.isError) {
    expect(JSON.stringify(subject.result))
      .to.be.eq(expected);
  } else {
    throw new Error(subject.error);
  }
}
