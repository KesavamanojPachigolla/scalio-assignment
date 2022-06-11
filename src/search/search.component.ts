import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../app/data.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  value: string;

  constructor(public dataService: DataService) {}

  ngOnInit() {}
}
