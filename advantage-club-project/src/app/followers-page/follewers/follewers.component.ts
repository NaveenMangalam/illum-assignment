import { Component, OnInit, OnDestroy } from "@angular/core";
import { FeedService } from "../../core/feed.service";
import { takeUntil, filter } from "rxjs/operators";
import { Subject } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-follewers",
  templateUrl: "./follewers.component.html",
  styleUrls: ["./follewers.component.scss"]
})
export class FollewersComponent implements OnInit, OnDestroy {
  followersData: Array<object>;
  slug: string | null;
  destroy$: Subject<boolean>;

  constructor(private feedService: FeedService, private route: ActivatedRoute) {
    this.followersData = [];
    this.slug = "";
    this.destroy$ = new Subject();
  }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get("userSlug");
    if (this.slug !== null) {
      this.feedService.followersPathUser(this.slug);
    }
    this.feedService
      .getFollowersFeed()
      .pipe(
        filter(followersData => typeof followersData !== "undefined"),
        takeUntil(this.destroy$)
      )
      .subscribe(data => {
        this.followersData = data;
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
