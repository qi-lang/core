import { string as S } from 'parser-ts';

namespace Arrow {
  export namespace Thin {
    export const LeftArrow = S.string('<-');
    export const RightArrow = S.string('->');
  }
}

export default Arrow;
