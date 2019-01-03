import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public projectArray = [
    {'title': 'Management application', 'branche': 'University', 'client': 'Audi', 'role': 'Project owner',
      'period': '10-10-2010', 'description': 'Communication with client'},
    {'title': '2Management application', 'branche': '2ng University', 'client': 'Audi',
      'role': 'Project owner', 'period': '10-10-2010', 'description': 'Communication with client'}
  ];



  constructor() { }

  ngOnInit() {
  }

  updateProject(title, branche, client, role, period, description) {
    this.projectArray.forEach( (project) => {if (project.title === title ) {
      project.branche = branche;
      project.client = client;
      project.role = role;
      project.period = period;
      project.description = description; }});
  }

  deleteProject(title, branche, client, role, period, description) {

  }

}
