import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  @Input() userId: string;

  data$: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data$ = this.dataService.searchData(this.userId);
  }
}
