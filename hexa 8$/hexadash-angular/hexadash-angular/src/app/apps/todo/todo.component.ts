import { Component, TemplateRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import list from '../../../assets/data/apps/user-list.json';

@Component({
  selector: 'todo-activities',
  templateUrl: './todo.component.html'
})
export class TodoListComponent {
  activeTab: number = 1;
  UserList = list.UserList;
  isVisible = false;
  isLoading = true;
  showContent = false;
  todoForm: FormGroup;

  constructor(private modal: NzModalService, private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      task: ['', Validators.required]
    });
  }

  showTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

  log(value: string[]): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.UserList, event.previousIndex, event.currentIndex);
  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    const modalRef: NzModalRef = this.modal.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: true,
      nzComponentParams: {
        value: 'Template Context'
      },
      nzOnOk: () => {
        if (this.todoForm.invalid) {
          return false; // Prevent closing the modal if the input is empty
        }

        const newTask = {
          id: this.UserList.length + 1,
          sub: this.todoForm.value.task,
          duration: '',
          avatar: '',
          star: ''
        };
        this.UserList = [...this.UserList, newTask];
        this.todoForm.reset(); // Clear the form input value

        this.destroyTplModal(modalRef);
      }
    });
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 500);
  }

  destroyTplModal(modalRef: NzModalRef): void {
    modalRef.destroy();
  }
}
