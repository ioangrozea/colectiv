import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-profile',
  templateUrl: './skill-profile.component.html',
  styleUrls: ['./skill-profile.component.css']
})
export class SkillProfileComponent implements OnInit {

  categoryArray: {category, listname: string}[] = [
    {"category": "Programming skills:","listname":"progskillsArray"},
    {"category": "Soft skills:","listname":"softkillsArray"}
  ];

  progskillsArray: {skill, level: string}[] = [
    {"skill": "C++", "level":"beginner"},
    {"skill": "Java", "level":"beginner"},
    {"skill": "Python", "level":"expert"},
    {"skill": "SQL", "level":"beginner"},
    {"skill": "Java", "level":"beginner"},
    {"skill": "Python", "level":"expert"},
    {"skill": "SQL", "level":"beginner"}
  ];

  softskillsArray: {skill, level: string}[] = [
    {"skill": "Communication", "level":"intermediate"},
    {"skill": "Teamwork", "level":"beginner"}
  ];
  constructor() { }

  ngOnInit() {
  }

  public trainingProgress: number=10;
}


