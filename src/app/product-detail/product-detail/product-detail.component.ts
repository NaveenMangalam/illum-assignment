import { Component, OnInit, OnDestroy } from "@angular/core";
import { FeedService } from "../../core/feed.service";
import { ActivatedRoute, Router } from "@angular/router";
import { filter, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  detailData: object;
  slug: string | null;
  destroy$: Subject<boolean>;
  constructor(private feedService: FeedService, private route: ActivatedRoute) {
    this.slug = "";
    this.detailData = {};
    this.destroy$ = new Subject();
  }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get("productSlug");
    if (this.slug !== null) {
      this.feedService.pathUser(this.slug);
    }
    this.feedService
      .getDetailFeed()
      .pipe(
        filter(detailData => typeof detailData !== "undefined"),
        takeUntil(this.destroy$)
      )
      .subscribe(data => {
        this.detailData = data;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
