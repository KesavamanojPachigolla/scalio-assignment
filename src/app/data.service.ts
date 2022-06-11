import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userId$: Subject<string> = new Subject();
  constructor(private http: HttpClient) {}

  searchData(userId: string): Observable<any> {
    return this.http.get(`https://api.github.com/search/users?q=${userId}`);
  }

  getUserId(): Observable<string> {
    return this.userId$.asObservable();
  }

  setUserId(val: string): void {
    this.userId$.next(val);
  }
}
