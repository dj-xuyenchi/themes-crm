import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  template:`
    <!-- skeleton -->
    <ng-template #loadingSkeleton>
      <nz-skeleton class="bg-white dark:bg-white/10 rounded-6 p-[30px] pt-[15px]" [nzShape]="circle" [nzAvatar]="true" [nzActive]="true"
        [nzParagraph]="{ rows: 5 }"></nz-skeleton>
    </ng-template>
    <!-- skeleton -->
    <div nz-row nzGutter="25">
      <div nz-col nzXl="8" nzMd="12" nzXs="24" class="mb-[25px]" *ngFor="let card of BlogCardData | slice:0:9">
        <ng-container *ngIf="showContent; else loadingSkeleton">
          <figure class="p-6 mb-0 bg-white group dark:bg-white/10 rounded-10 shadow-regular dark:shadow-none">
            <div class="relative after:absolute after:h-0 after:w-full ltr:after:left-0 rtl:after:right-0 after:top-0 after:bg-[#0a0a0a15] after:rounded-10 after:transition-all after:duration-300 group-hover:after:h-full">
              <img class="w-full rounded-10" src="assets/images/blogs/{{card.img}}" alt="hexadash Blog">
            </div>
            <figcaption>
              <div class="flex justify-between items-center mt-2.5">
                <span class="inline-block text-light dark:text-white/60 text-15">{{card.postDate}}</span>
              </div>
              <h2 class="mt-4 mb-3 text-xl font-semibold">
                <a class="text-dark hover:text-primary dark:text-white/[.87] dark:hover:text-primary pointer-events-none" [href]="blankUrl">{{card.title}}</a>
              </h2>
              <p class="mb-4 text-base text-dark dark:text-white/[.87]">{{card.content}}</p>
              <div class="flex justify-between">
                <div class="flex items-center gap-x-4">
                  <img class="rounded-full max-w-[32px]" src="assets/images/avatars/{{card.authorImg}}" alt="author image">
                  <span class="text-light dark:text-white/60 text-15">{{card.author}}</span>
                </div>
                <ul class="flex items-center gap-[8px]">
                  <li>
                    <span class="flex items-center leading-none gap-x-1 text-light dark:text-white/60 text-13">
                      <span nz-icon nzType="heart" nzTheme="outline"></span>
                      <span class="flex items-center leading-none text-light dark:text-white/60 text-13">{{card.favouriteBy}}</span>
                    </span>
                  </li>
                  <li>
                    <span class="flex items-center leading-none gap-x-1 text-light dark:text-white/60 text-13">
                      <span nz-icon nzType="file-text" nzTheme="outline"></span>
                      <span class="flex items-center leading-none text-light dark:text-white/60 text-13">{{card.viewedBy}}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </figcaption>
          </figure>
        </ng-container>
      </div>
    </div>

  `,
})
export class BlogPageComponent implements OnInit {
  isLoading = true;
  showContent = false;
  BlogCardData: any[]; // Store the cards data
  blankUrl: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Simulate loading time
    this.loadData();
    // Fetch the cards data from the server
    this.http.get<any>('../../../assets/data/pages/blog-data.json').subscribe(data => {
      this.BlogCardData = data.BlogCardData;
    });
  }
  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }
}
