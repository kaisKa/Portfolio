import { Project } from './../_models/Project';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import {  } from '../_models/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, ModalModule, CarouselModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent implements OnInit {

  project= {} as Project;
  ngOnInit(): void {

  }

  constructor(public modalRef: BsModalRef){

  }
}
