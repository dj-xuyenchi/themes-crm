import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { AppsService } from '../../../shared/services/apps.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProjectList } from '../../../shared/interfaces/project-list.type';


@Component({
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent {
  // Component properties
  view: string = 'cardView';
  newProject: boolean = false;
  projectListRaw: ProjectList[];
  projectList: any[] = [];
  searchQuery: string = '';
  isLoading = true;
  showContent = false;
  showContentShorting = false;
  startValue: Date | null = null;
  endValue: Date | null = null;
  selectedSort: string = 'all';
  filteredProjects: any[] = [];

  constructor(private projectListSvc: AppsService, private modalService: NzModalService) {}

  ngOnInit(): void {
    this.filteredProjects = [...this.projectList];
    this.filterProjects(); // Filter projects initially

    this.projectListSvc.getProjectListJson().subscribe(data => {
      this.projectListRaw = data;
      this.projectList = data;

      this.sortProjects(this.selectedSort); // Sort projects based on the selected sort type
    });

    // Set default selection to "All"
    this.selectedSort = 'all';

    // Simulate loading time
    this.loadData();
  }

    // Simulate loading data
    loadData() {
      // Simulate an asynchronous data loading operation
      setTimeout(() => {
        this.isLoading = false;
        this.showContent = true;
      }, 500);
    }
  // Filter the projects based on the search query
  filterProjects() {
    if (this.searchQuery.trim() === '') {
      this.filteredProjects = [...this.projectList];
    } else {
      const query = this.searchQuery.toLowerCase().trim();
      this.filteredProjects = this.projectList.filter(item => item.project.toLowerCase().includes(query));
    }
  }

  // Sort the projects based on the selected sort type
  sortProjects(sortType: string) {
    this.selectedSort = sortType;
    this.isLoading = true; // Enable loading effect
    this.showContentShorting = false;

    if (sortType === 'all') {
      // Show all projects
      this.filteredProjects = [...this.projectList];
      this.isLoading = false; // Disable loading effect
      this.showContentShorting = true;
    } else {
      // Filter projects based on sortType
      setTimeout(() => {
        this.filteredProjects = this.projectList.filter(item => item.status === sortType);
        this.isLoading = false; // Disable loading effect
        this.showContentShorting = true;
      }, 500); // Simulate a delay for sorting
    }
  }

  // Show modal for creating a new project
  showNewProject(newProjectContent: TemplateRef<{}>) {
    const modal = this.modalService.create({
      nzTitle: 'Create New Project',
      nzContent: newProjectContent,
      nzFooter: [
        {
          label: 'Create Project',
          type: 'primary',
          onClick: () =>
            this.modalService.confirm({
              nzTitle: 'Are you sure you want to create this project?',
              nzOnOk: () => this.modalService.closeAll()
            })
        }
      ],
      nzWidth: 620
    });
  }

  // Checkbox event handler
  log(value: string[]): void {
  }

  // Calendar
  @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;
  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.endValue) {
      return false;
    }
    return startValue.getTime() > this.endValue.getTime();
  };

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) {
      return false;
    }
    return endValue.getTime() <= this.startValue.getTime();
  };

  handleStartOpenChange(open: boolean): void {
    if (!open) {
      this.endDatePicker.open();
    }
  }

  handleEndOpenChange(open: boolean): void {
  }
}
