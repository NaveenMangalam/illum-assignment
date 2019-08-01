import { Injectable } from "@angular/core";
import { FeedListingData } from "../product-listing/product-listing";
import { FeedDetailData } from "../product-detail/product-detail";
import { FeedSearchData } from "../search/search";
import { FeedFollowersData } from "../followers-page/followers";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FeedService {
  private _apiUrlListing: string;
  private _apiUrlListingSearch: string;
  private _apiUrlDetail: string;
  private _apiUrlFollowers: string;
  private userName: string;
  searchString: string;
  constructor(private http: HttpClient) {
    this.userName = "";
    this.searchString = "";
    this._apiUrlListing = "https://api.github.com/users";
    this._apiUrlListingSearch = "https://api.github.com/search/users";
    this._apiUrlDetail = "";
    this._apiUrlFollowers = "";
  }

  getListingFeed(): Observable<FeedListingData[]> {
    return this.http
      .get<FeedListingData[]>(this._apiUrlListing)
      .pipe(catchError(e => throwError(e)));
  }
  pathUser(user: string) {
    this.userName = user;
    return (this._apiUrlDetail =
      "https://api.github.com/users/" + this.userName);
  }
  followersPathUser(user: string) {
    this.userName = user;
    return (this._apiUrlFollowers =
      "https://api.github.com/users/" + this.userName + "/followers");
  }
  getDetailFeed(): Observable<FeedDetailData[]> {
    return this.http
      .get<FeedDetailData[]>(this._apiUrlDetail)
      .pipe(catchError(e => throwError(e)));
  }

  getFollowersFeed(): Observable<FeedFollowersData[]> {
    return this.http
      .get<FeedFollowersData[]>(this._apiUrlFollowers)
      .pipe(catchError(e => throwError(e)));
  }
  searchStringContent(user: string) {
    this.searchString = user;
  }
  getSearchFeed(): Observable<FeedSearchData[]> {
    const params = {
      q: this.searchString
    };
    return this.http
      .get<FeedSearchData[]>(this._apiUrlListingSearch, { params })
      .pipe(catchError(e => throwError(e)));
  }
}
