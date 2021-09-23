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
