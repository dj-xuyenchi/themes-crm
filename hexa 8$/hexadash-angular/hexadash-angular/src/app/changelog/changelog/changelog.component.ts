import { Component  } from '@angular/core';
import versions from '../../../assets/data/pages/changelog.json';


@Component({
  templateUrl: 'changelog.component.html',
  styles: [`

  `]
})

export class ChangeLogComponent {
  versions: any[] = versions;
  isLoading = true;
  showContent = false;

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // Simulate an asynchronous data loading operation
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }
}
