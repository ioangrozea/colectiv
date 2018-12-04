import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  mitarbeiterArray: {id, name: string, photo: string, consulting_level: string, region: string}[] = [
    {"id":0, "name": "Cotos Maria", "photo":"profile1.jpg","consulting_level":"Associate IT Consultant", "region": "Suceava"},
    {"id":1, "name": "Szappanyos Szdionia", "photo":"profile1.jpg","consulting_level":"IT Consultant", "region": "Medias"},
    {"id":3, "name": "Lupas Teodora", "photo":"profile1.jpg","consulting_level":"Scrum master", "region": "Bucuresti"},
    {"id":4, "name": "Murza Cristina", "photo":"profile1.jpg","consulting_level":"Project owner", "region": "Cluj-Napoca"},
    {"id":4, "name": "Murza Cristina", "photo":"profile1.jpg","consulting_level":"Project owner", "region": "Cluj-Napoca"},
    {"id":4, "name": "Murza Cristina", "photo":"profile1.jpg","consulting_level":"Project owner", "region": "Cluj-Napoca"}

  ];

  constructor() { }

  ngOnInit() {
  }

}
