import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {CandidateModel} from "../candidate.model";


const EXAMPLE_DATA: CandidateModel[] = [
  {id: 1, nome: 'Hydrogen', partido: 'aa', numero:'22', voto:0},
  {id: 2, nome: 'Helium', partido: 'aa', numero:'22', voto:0},
  {id: 3, nome: 'Lithium', partido: 'aa', numero:'22', voto:0},
  {id: 4, nome: 'Beryllium', partido: 'aa', numero:'22', voto:0},
  {id: 5, nome: 'Boron', partido: 'aa', numero:'22', voto:0},
  {id: 6, nome: 'Carbon', partido: 'aa', numero:'22', voto:0},
  {id: 7, nome: 'Nitrogen', partido: 'aa', numero:'22', voto:0},
  {id: 8, nome: 'Oxygen', partido: 'aa', numero:'22', voto:0},
  {id: 9, nome: 'Fluorine', partido: 'aa', numero:'22', voto:0},
  {id: 10, nome: 'Neon', partido: 'aa', numero:'22', voto:0},
  {id: 11, nome: 'Sodium', partido: 'aa', numero:'22', voto:0},
  {id: 12, nome: 'Magnesium', partido: 'aa', numero:'22', voto:0},
  {id: 13, nome: 'Aluminum', partido: 'aa', numero:'22', voto:0},
  {id: 14, nome: 'Silicon', partido: 'aa', numero:'22', voto:0},
  {id: 15, nome: 'Phosphorus', partido: 'aa', numero:'22', voto:0},
  {id: 16, nome: 'Sulfur', partido: 'aa', numero:'22', voto:0},
  {id: 17, nome: 'Chlorine', partido: 'aa', numero:'22', voto:0},
  {id: 18, nome: 'Argon', partido: 'aa', numero:'22', voto:0},
  {id: 19, nome: 'Potassium', partido: 'aa', numero:'22', voto:0},
  {id: 20, nome: 'Calcium', partido: 'aa', numero:'22', voto:0},
];

/**
 * Data source for the CandidatePrintAndEdition2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CandidatePrintAndEdition2DataSource extends DataSource<CandidateModel> {
  data: CandidateModel[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<CandidateModel[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: CandidateModel[]): CandidateModel[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: CandidateModel[]): CandidateModel[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'nome': return compare(a.nome, b.nome, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
