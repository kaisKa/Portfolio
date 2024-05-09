import { ProjectsService } from './../_services/projects.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { NgFor } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, NgFor, CollapseModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {



  projects = {} as Project[]

  isCollapsed = true;
  filtering = false;

  java = false;
  springBoot = false;
  typeScript = false;
  nestJs = false;
  angular = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Kais Alkotamy - Portoflio')
  }
  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: res => {
        this.projects = res
        console.log("sdsa");
      }
    });
    console.log("posdfs");
  }

  filter() {

    let filterTags: Tag[] = [];
    if (this.java)
      filterTags.push(Tag.JAVA);
    if (this.typeScript)
      filterTags.push(Tag.TYPESCRIPT)
    if (this.springBoot)
      filterTags.push(Tag.SPRINGBOOT);
    if (this.angular)
      filterTags.push(Tag.ANGULAR);
    if (this.nestJs)
      filterTags.push(Tag.NESTJS);

    if (this.java || this.angular || this.typeScript || this.nestJs || this.springBoot)
      this.filtering = true;
    else
      this.filtering = false;
    this.projects = this.projectService.getProjectsByFilter(filterTags)
  }

  resetFilter() {
    this.java = false;
    this.springBoot = false;
    this.typeScript = false;
    this.nestJs = false;
    this.angular = false;

    this.filtering = false;

    this.projectService.getProjects().subscribe({
      next: res => {
        this.projects = res
        console.log("sdsa");
      }
    });
  }

}
