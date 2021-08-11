import { string as S, stream as ST } from 'parser-ts';

const parser = S.string('Hello');

const ident = (input: string) => parser(ST.stream([...input]));

export default ident;
