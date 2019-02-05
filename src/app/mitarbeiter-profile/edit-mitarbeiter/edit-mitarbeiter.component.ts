import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-mitarbeiter',
  templateUrl: './edit-mitarbeiter.component.html',
  styleUrls: ['./edit-mitarbeiter.component.css']
})
export class EditMitarbeiterComponent implements OnInit {

  public trainingProgress: 10;
  public selectedMitarId = localStorage.getItem('id');
  public selectedMitarName = localStorage.getItem('name');
  public selectedMitarConsultLevel = localStorage.getItem('consulting_level');
  public selectedMitarRegion = localStorage.getItem('region');
  public selectedMitarPhoto = localStorage.getItem('photo');

  categoryArray: {category, listname: string}[] = [
    {'category': 'Programming skills:', 'listname': 'progskillsArray'},
    {'category': 'Soft skills:', 'listname': 'softkillsArray'}
  ];

  progskillsArray: {skill, level: string}[] = [
    {'skill': 'C++', 'level': 'beginner'},
    {'skill': 'Java', 'level': 'beginner'},
    {'skill': 'Python', 'level': 'expert'},
    {'skill': 'SQL', 'level': 'beginner'},
    {'skill': 'Java', 'level': 'beginner'},
    {'skill': 'Python', 'level': 'expert'},
    {'skill': 'SQL', 'level': 'beginner'}
  ];

  softskillsArray: {skill, level: string}[] = [
    {'skill': 'Communication', 'level': 'intermediate'},
    {'skill': 'Teamwork', 'level': 'beginner'}
  ];

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
