import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'commonFilter'
})
export class CommonFilterPipe implements PipeTransform {

  transform(value: Array<any>, ...args: string[]): Array<any> {
    let searchTerm = args[0];
    let fields = args.splice(1);
    if (!searchTerm) {
      return value;
    }
    if (!value || value.length == 0) {
      return value;
    }
    if (fields && fields.length > 0) {
      return value.filter((item: any) => {
        let flag = false;
        fields.forEach((arg: string) => {
          if (item[arg] && _.toLower(item[arg]).indexOf(_.toLower(searchTerm)) > -1) {
            flag = true;
          }
        });
        return flag;
      });
    }
    return value;
  }

}
