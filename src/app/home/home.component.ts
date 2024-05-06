import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';
import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,NgFor],
  providers:[ { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true }}],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{


  featureProject = {} as Project

  constructor(private titleService: Title, private projectService:ProjectsService){
    this.titleService.setTitle('Kais Alkotamy - Home')
  }
  ngOnInit(): void {

    this.featureProject = this.projectService.getProjectById(0)
  }


}
