import { Injectable, Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!value || !field) {
      return items;
    }

    return items.filter(singleItem => {
      return singleItem[field].toLowerCase().includes(value.toLowerCase());
    });
  }
}
