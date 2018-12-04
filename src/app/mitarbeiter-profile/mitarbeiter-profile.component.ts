import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mitarbeiter-profile',
  templateUrl: './mitarbeiter-profile.component.html',
  styleUrls: ['./mitarbeiter-profile.component.css']
})
export class MitarbeiterProfileComponent implements OnInit {

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
