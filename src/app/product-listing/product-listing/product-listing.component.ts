import { Component, OnInit, OnDestroy } from "@angular/core";
import { FeedService } from "../../core/feed.service";
import { filter, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
@Component({
  selector: "app-product-listing",
  templateUrl: "./product-listing.component.html",
  styleUrls: ["./product-listing.component.scss"]
})
export class ProductListingComponent implements OnInit, OnDestroy {
  listingData: Array<object>;
  private destroy$: Subject<boolean>;
  constructor(private feedService: FeedService) {
    this.listingData = [];
    this.destroy$ = new Subject();
  }

  ngOnInit() {
    this.feedService
      .getListingFeed()
      .pipe(
        filter(listData => typeof listData !== "undefined"),
        takeUntil(this.destroy$)
      )
      .subscribe(data => {
        console.log(data);
        this.listingData = data;
      });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
