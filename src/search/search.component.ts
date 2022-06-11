import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() userId: EventEmitter<string> = new EventEmitter();
  value: string;

  constructor() {}

  ngOnInit() {}
}
