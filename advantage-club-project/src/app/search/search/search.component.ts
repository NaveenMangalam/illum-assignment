import { Component, OnInit, OnDestroy } from "@angular/core";
import { FeedService } from "../../core/feed.service";
import { Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit, OnDestroy {
  searchData: object;
  destroy$: Subject<boolean>;
  constructor(private feedService: FeedService) {
    this.searchData = {};
    this.destroy$ = new Subject();
  }

  ngOnInit() {
    this.feedService
      .getSearchFeed()
      .pipe(
        filter(listData => typeof listData !== "undefined"),
        takeUntil(this.destroy$)
      )
      .subscribe(data => {
        this.searchData = data;
      });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
