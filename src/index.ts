import consola from 'consola';
import { stream as ST } from 'parser-ts';
import number from './parser/symbols/number';

consola.log(number(ST.stream([...'d'])));
