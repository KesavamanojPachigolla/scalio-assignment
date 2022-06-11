import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { ResponseModel, User } from '../model/user';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['avatar_url', 'login', 'type'];
  dataSource = new MatTableDataSource<User>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  data$: Observable<ResponseModel>;
  error: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUserId().subscribe((userId) => {
      this.dataSource = new MatTableDataSource<any>([]);
      this.error = null;
      this.data$ = this.dataService.searchData(userId);
      this.data$.subscribe(
        (data) => {
          this.dataSource = new MatTableDataSource<User>(data.items);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        (err) => {
          this.error = err.message;
        }
      );
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
