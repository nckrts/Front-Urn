import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

import { CandidatePrintAndEdition2DataSource,  } from './candidate-print-and-edition2-datasource';
import {CandidateModel} from "../candidate.model";

@Component({
  selector: 'app-candidate-print-and-edition2',
  templateUrl: './candidate-print-and-edition2.component.html',
  styleUrls: ['./candidate-print-and-edition2.component.css']
})
export class CandidatePrintAndEdition2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CandidateModel>;
  dataSource: CandidatePrintAndEdition2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nome', 'partido' , 'numero' , 'votos'];

  constructor() {
    this.dataSource = new CandidatePrintAndEdition2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
