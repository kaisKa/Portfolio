import { Project } from './../_models/Project';
import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  lolo = [] as Project[];
  assetsUrl: string = 'assets/projects.json'
  projects: Project[] = [
    {
      id: 0,
      name: "Authentication with Keycloak",
      summery: "keycloak authentication"
      ,
      description: "will be added later",
      projectLink: "https://github.com/kaisKa/authentication-manager",
      tags: [Tag.JAVA, Tag.SPRINGBOOT],
      pictures: ["../../assets/img.jpg", "../../assets/img2.jpg", "../../assets/img3.jpg"]
    },
    {
      id: 1,
      name: "Authentication with Keycloak",
      summery: "keycloak authentication"
      ,
      description: "will be added later",
      projectLink: "https://github.com/kaisKa/authentication-manager",
      tags: [Tag.TYPESCRIPT, Tag.NESTJS],
      pictures: ["../../assets/img.jpg", "../../assets/img2.jpg", "../../assets/img3.jpg"]
    },
    {
      id: 2,
      name: "Authentication with Keycloak",
      summery: "keycloak authentication"
      ,
      description: "will be added later",
      projectLink: "https://github.com/kaisKa/authentication-manager",
      tags: [Tag.JAVA, Tag.SPRINGBOOT],
      pictures: ["../../assets/img.jpg", "../../assets/img2.jpg", "../../assets/img3.jpg"]
    }, {
      id: 3,
      name: "Authentication with Keycloak",
      summery: "keycloak authentication"
      ,
      description: "will be added later",
      projectLink: "https://github.com/kaisKa/authentication-manager",
      tags: [Tag.JAVA, Tag.SPRINGBOOT],
      pictures: ["../../assets/img.jpg", "../../assets/img2.jpg", "../../assets/img3.jpg"]
    }, {
      id: 4,
      name: "Authentication with Keycloak",
      summery: "keycloak authentication"
      ,
      description: "will be added later",
      projectLink: "https://github.com/kaisKa/authentication-manager",
      tags: [Tag.JAVA, Tag.SPRINGBOOT],
      pictures: ["../../assets/img.jpg", "../../assets/img2.jpg", "../../assets/img3.jpg"]
    }, {
      id: 5,
      name: "Authentication with Keycloak",
      summery: "keycloak authentication"
      ,
      description: "will be added later",
      projectLink: "https://github.com/kaisKa/authentication-manager",
      tags: [Tag.JAVA, Tag.SPRINGBOOT],
      pictures: ["../../assets/img.jpg", "../../assets/img2.jpg", "../../assets/img3.jpg"]
    }
  ];




  // constructor(private http: HttpClient) { }

  getProjects() {
    // this.readByHttpClient();
    // this.getMeeting();
    return this.projects;

  }

  getProjectById(id: number): Project {
    let project = this.projects.find(p => p.id === id)

    if (project === undefined)
      throw new TypeError("There is no project that matches the id: " + id)
    return project;
  }

  getProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];
    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false)
          foundAll = false;
      })

      if (foundAll)
        filteredProjects.push(project)
    })

    return filteredProjects
  }

  // products: any = [];

  // readByHttpClient() {
  //   this.http.get<Project[]>("assets/projects.json").subscribe(data  => {
  //     console.log(data)
  //     this.products = data;
  //   });
  // }


  //  getMeeting() {
  //   return this.http.get<Meeting>("assets/meetings.json")
  //     .subscribe(data => {
  //       console.log(data);
  //     })
  // }
  //   const data =  this.http.get<Project[]>(this.assetsUrl).subscribe(res => this.lolo = res)

  //   console.log(data);

  // }
}
