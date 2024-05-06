import { Component, Input, TemplateRef, ViewChild, input } from '@angular/core';
import { Project } from '../_models/Project';
import { BrowserModule } from '@angular/platform-browser';
import { NgFor } from '@angular/common';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { BsModalRef, BsModalService, ModalDirective, ModalOptions } from "ngx-bootstrap/modal";
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor, ProjectModalComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  providers: [BsModalService]
})
export class ProjectCardComponent {

  @Input() project = {} as Project;
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }


  openModal() {
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project
      }
    }
    this.modalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }
  exitModal = (): void => {
    this.modalRef?.hide();
  };
}
