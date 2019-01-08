import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  mitarbeiterArray: {id, name: string, photo: string, consulting_level: string, region: string}[] = [
    {'id': 0, 'name': 'Cotos Maria', 'photo': 'profile1.jpg', 'consulting_level': 'Associate IT Consultant', 'region': 'Suceava'},
    {'id': 1, 'name': 'Szappanyos Szdionia', 'photo': 'profile1.jpg', 'consulting_level': 'IT Consultant', 'region': 'Medias'},
    {'id': 3, 'name': 'Lupas Teodora', 'photo': 'profile1.jpg', 'consulting_level': 'Scrum master', 'region': 'Bucuresti'},
    {'id': 4, 'name': 'Murza Cristina', 'photo': 'profile1.jpg', 'consulting_level': 'Project owner', 'region': 'Cluj-Napoca'},
    {'id': 4, 'name': 'Murza Cristina', 'photo': 'profile1.jpg', 'consulting_level': 'Project owner', 'region': 'Cluj-Napoca'},
    {'id': 4, 'name': 'Murza Cristina', 'photo': 'profile1.jpg', 'consulting_level': 'Project owner', 'region': 'Cluj-Napoca'}

  ];

  skillArray: {id, name: string}[] = [
    {'id': 0, 'name': 'Skill1'},
    {'id': 1, 'name': 'Skill2'},
    {'id': 2, 'name': 'Skill3'},
    {'id': 3, 'name': 'Skill4'},
    {'id': 4, 'name': 'Skill5'},
    {'id': 5, 'name': 'Skill6'}

  ];

  regionArray: {id, name: string}[] = [
    {'id': 0, 'name': 'Region1'},
    {'id': 1, 'name': 'Region2'},
    {'id': 2, 'name': 'Region3'},
    {'id': 3, 'name': 'Region4'},
    {'id': 4, 'name': 'Region5'},
    {'id': 5, 'name': 'Region6'}

  ];

  consultingArray: {id, name: string}[] = [
  {'id': 0, 'name': 'consulting1'},
  {'id': 1, 'name': 'consulting2'},
  {'id': 2, 'name': 'consulting3'},
  {'id': 3, 'name': 'consulting4'},
  {'id': 4, 'name': 'consulting5'},
  {'id': 5, 'name': 'consulting6'}

  ];

  constructor() { }

  ngOnInit() {
  }

}
