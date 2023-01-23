import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateWord'
})
export class TruncateWordPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    const [limit] = args;
    return value.split(' ').slice(0, limit).join(' ');
  }

}
