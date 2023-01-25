import { Pipe, PipeTransform } from '@angular/core';
import { StandingsData } from '../models/dataModel';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(list: StandingsData[], value: string) {

    return value ? list.filter(item => item.name === value) : list;
  }

}