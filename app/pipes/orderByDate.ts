import { Pipe, PipeTransform, Injectable } from '@angular/core';

import * as moment from 'moment';
import 'moment/locale/pt-br';

@Pipe({
    name: 'ordenaListaPorData'
})
@Injectable()
export class SortListPipe implements PipeTransform {
  transform(lista: any[]): any {    
    if (lista){
      lista = lista.sort((a, b): number => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    }
    return lista;
  }
}