import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import dayjs from 'dayjs';

@Component({
  selector: 'app-over-header',
  imports: [RouterLink],
  templateUrl: './over-header.html',
  styleUrl: './over-header.less',
})
export class OverHeaderComponent implements OnInit {
  private readonly DISCOUNT_BANNER = 'discountBannerDate';

  isVisibleOverHeader: boolean = false;
  shouldRenderOverHeader: boolean = false;

  ngOnInit(): void {
    this.checkBannerVisibility();
  }

  private checkBannerVisibility(): void {
    const lastShownDateStr = localStorage.getItem(this.DISCOUNT_BANNER);

    if (!lastShownDateStr) {
      this.showBanner();
      return;
    }

    const lastShownDate = dayjs(lastShownDateStr);

    if (dayjs().isBefore(lastShownDate)) {
      this.showBanner();
    }

    console.log(dayjs());
    console.log(lastShownDate);
    console.log(dayjs().isAfter(lastShownDate));
    console.log(this.isVisibleOverHeader);
    console.log(this.shouldRenderOverHeader);
  }

  private showBanner(): void {
    this.shouldRenderOverHeader = true;
    this.isVisibleOverHeader = true;
  }

  closeOverHeader(): void {
    this.isVisibleOverHeader = false;
  }

  onAnimationEnd(e: AnimationEvent): void {
    if (e.animationName.includes('slide-close') && !this.isVisibleOverHeader) {
      const tomorrow = dayjs().add(1, 'day');
      localStorage.setItem(this.DISCOUNT_BANNER, tomorrow.toISOString());
      this.shouldRenderOverHeader = false;
    }
  }
}
