import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionComponent, AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AccordionModule, CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isWorkExperience = false;
  isEducation = false;
  isCertifiactions = false;
  isSkills= false;
  constructor(private titleService: Title, private render: Renderer2){
    this.titleService.setTitle('Kais Alkotamy - Resume')
  }


  downloadFile(){
    const link = this.render.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href','../../assets/Alkotamy_Kais_CV.pdf');
    link.setAttribute('download','Resume.pdf');
    link.click();
    link.remove();

  }
}
