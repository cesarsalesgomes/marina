import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateBr'
})
export class DateBrPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    const day = value.slice(8, 10);

    let month: string;
    switch (value.slice(5, 7)) {
      case '01':
        month = 'Janeiro';
        break;
      case '02':
        month = 'Fevereiro';
        break;
      case '03':
        month = 'Março';
        break;
      case '04':
        month = 'Abril';
        break;
      case '05':
        month = 'Maio';
        break;
      case '06':
        month = 'Junho';
        break;
      case '07':
        month = 'Julho';
        break;
      case '08':
        month = 'Agosto';
        break;
      case '09':
        month = 'Setembro';
        break;
      case '10':
        month = 'Outubro';
        break;
      case '11':
        month = 'Novembro';
        break;
      case '12':
        month = 'Dezembro';
        break;
    }
    const year = value.slice(0, 4);

    return day + ' ' + month + ' ' + year;
  }

}
