import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionComponent, AccordionModule } from 'ngx-bootstrap/accordion';
import { Resume } from '../_models/resume';

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
  isSkills = false;

  resume: Resume = {
    workExperiences: [
      {
        title: "Backend Engineer",
        companyName: "AvaFive",
        location: "UAE, Dubai (onsite)",
        startDate: "APR 2023",
        endDate: "DEC 2023",
        responsibilities: [
          "Analyzed healthcare project needs, converted them into user stories, actively involved in the entire Software Development Life Cycle (SDLC).",
          "Architected and implemented microservice architecture using Spring Boot. Boosted security with Keycloak for seamless role-based authentication and authorization.",
          "Deployed robust infrastructure with AWS, Fargate, ECS. Streamlined containerization with Docker and GitLab pipelines for seamless operations."
        ]
      },
      {
        title: "Backend Engineer",
        companyName: "Techno Visions",
        location: "Syria, Damascus (onsite)",
        startDate: "MAR 2022",
        endDate: "FEB 2023",
        responsibilities: [
          "Collaborated in an agile team, developing an RAFM system to reduce telecom fraud by 70%.",
          "Led BSS provisioning automation, improving latency by 60%, reducing human intervention by 80% using Java, Spring Boot, Kafka, Zeebe, Angular, ELK.",
          "Instrumental in leveraging WSO2 Micro Integrator for seamless API integration within enterprise environments."
        ]
      },
      {
        title: "Integration Specialist",
        companyName: "Syriatel Telecom",
        location: "Syria, Damascus (onsite)",
        startDate: "FEB 2020",
        endDate: "FEB 2022",
        responsibilities: [
          "Integrated third parties into Epay channels, utilizing JAX-RS and PL/SQL.,boosting subscribers by 5000.",
          "Improved the POS mobile app, adding features to boost mobility by 40%.",
          "Oversaw charging system, addressed customer concerns, reporting, leverage SQL/PL-SQL.",
          "Overhauled CRM system, fixing defects, enhancing flows with HTML, CSS, and Javascript.",
          "Constructed offers and bundles for prepaid and postpaid lines, increasing revenue by 2%."
        ]
      },
      {
        title: "Mobile Developer",
        companyName: "Syriatel Telecom",
        location: "Syria, Damascus (onsite)",
        startDate: "FEB 2019",
        endDate: "JAN 2020",
        responsibilities: [
          "Implemented solutions showcasing proficiency in Swift and Java, contributing to the successful development of 3+ fully functional mobile applications.",
          "Ensured optimal performance through the delivery of clean, testable code, adhering to high standards."
        ]
      },
      {
        title: "Mobile Administrator",
        companyName: "Syriatel Telecom",
        location: "Syria, Damascus (onsite)",
        startDate: "JUL 2018",
        endDate: "JAN 2019",
        responsibilities: [
          "Monitored system functioning, troubleshooting and resolving issues, optimizing core function, and enhancing memory consumption by 30%.",
          "Re-constructed layouts, delivering more user-friendly interfaces."
        ]
      }
    ],
    education: [
      {
        degreeName: "Bachelor in information technology",
        universityName: "Damascus University",
        department: "Syria, Damascus"
      },
      {
        degreeName: "Master in web science",
        universityName: "Syrian Virtual University",
        department: "Syria, Damascus"
      }
    ],
    certifications: []
  };


  constructor(private titleService: Title, private render: Renderer2) {
    this.titleService.setTitle('Kais Alkotamy - Resume')
  }


  downloadFile() {
    const link = this.render.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Alkotamy_Kais_CV.pdf');
    link.setAttribute('download', 'Resume.pdf');
    link.click();
    link.remove();

  }
}
