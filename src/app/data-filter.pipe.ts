import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {
  transform(data: any[], searchTerm: string): any[] {
    if (!searchTerm || searchTerm.trim() === '') {
      return data;
    }

    searchTerm = searchTerm.toLowerCase();
    return data.filter(item => {
      return (
        item.name.toLowerCase().includes(searchTerm) ||
        item.email.toLowerCase().includes(searchTerm)
        // Add more properties to search by
    );
    });
  }
}
