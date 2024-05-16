import { Observable, catchError, map } from 'rxjs';
import { Project } from './../_models/Project';
import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  assetsUrl: string = 'assets/projects.json'
  projects: Project[] = [];

  constructor(private http: HttpClient) { }



  getProjectById(id: number): Observable<Project> {
    return this.getProjects().pipe(
      map(projects => {
        const project = projects.find(p => p.id === id);
        if (!project) {
          throw new Error(`There is no project that matches the id: ${id}`);
        }
        return project;
      }),
      catchError(error => {
        console.error('Error fetching projects:', error);
        throw error;
      })
    );
  }

  getProjectsByFilter(filterTags: Tag[]): Observable<Project[]> {
    return this.getProjects().pipe(
      map(projects => {
        let filteredProjects: Project[] = [];
        projects.forEach(function (p) {
          let foundAll = true;

          filterTags.forEach(function (filterTag) {
            if (!p.tags.some(tag => tag.key === filterTag.key))
              foundAll = false;
          })

          if (foundAll)
            filteredProjects.push(p)
        })

        return filteredProjects;
      })
    )
  }



  // getProjectsByFilter(filterTags: Tag[]) {
  //   let filteredProjects: Project[] = [];
  //   this.getProjects().subscribe({
  //     next: res => {
  //       this.projects = res
  //       this.projects.forEach(function (project) {
  //         let foundAll = true;

  //         filterTags.forEach(function (filterTag) {
  //           if (project.tags.includes(filterTag) == false)
  //             foundAll = false;
  //         })

  //         if (foundAll)
  //           filteredProjects.push(project)
  //       })
  //     }
  //   });


  //   return filteredProjects
  // }



  getProjects(): Observable<Project[]> {
    return this.http.get<any>("assets/projects.json")
      .pipe(map(response => response.projects as Project[]))
    // .subscribe({
    //   next: res => {
    //     this.projects = res
    //     console.log("sdsa");
    //   }
    // });
  }


}
