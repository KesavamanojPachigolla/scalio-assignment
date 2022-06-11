import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { ResponseModel } from './model/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userId$: Subject<string> = new Subject();
  constructor(private http: HttpClient) {}

  searchData(userId: string): Observable<ResponseModel> {
    return this.http
      .get(`https://api.github.com/search/users?q=${userId}`)
      .pipe(map((data) => data as ResponseModel));
  }

  getUserId(): Observable<string> {
    return this.userId$.asObservable();
  }

  setUserId(val: string): void {
    this.userId$.next(val);
  }
}
