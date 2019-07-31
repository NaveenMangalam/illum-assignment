import { Injectable } from "@angular/core";
import { FeedListingData } from "../product-listing/product-listing";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FeedService {
  private _apiUrl: string;

  constructor(private http: HttpClient) {
    this._apiUrl = "https://api.github.com/users";
  }

  getListingFeed(): Observable<FeedListingData[]> {
    return this.http
      .get<FeedListingData[]>(this._apiUrl)
      .pipe(catchError(e => throwError(e)));
  }
}
