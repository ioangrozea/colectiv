import {Component, OnInit} from '@angular/core';
import {Data, Router} from '@angular/router';
import {User} from '../shared/entity/User';
import {ContentService} from '../shared/ContentService';

@Component({
  selector: 'app-mitarbeiter-profile',
  templateUrl: './mitarbeiter-profile.component.html',
  styleUrls: ['./mitarbeiter-profile.component.css']
})
export class MitarbeiterProfileComponent implements OnInit {

  user: User;
  users: Array<User>;
  mitarbeiterArray: { id, name: string, photo: string, consulting_level: string, region: string }[] = [
    {'id': 0, 'name': 'Cotos Maria', 'photo': 'emp1.jpg', 'consulting_level': 'Associate IT Consultant', 'region': 'Suceava'},
    {'id': 1, 'name': 'Szappanyos Szdionia', 'photo': 'image.jpg', 'consulting_level': 'IT Consultant', 'region': 'Medias'},
    {'id': 2, 'name': 'Lupas Teodora', 'photo': 'emp1.jpg', 'consulting_level': 'Scrum master', 'region': 'Bucuresti'},
    {'id': 3, 'name': 'Murza Cristina', 'photo': 'emp1.jpg', 'consulting_level': 'Project owner', 'region': 'Cluj-Napoca'},
    {'id': 4, 'name': 'Lung Oana', 'photo': 'emp1.jpg', 'consulting_level': 'Associate IT Consultant', 'region': 'Tirgu-Mures'}
  ];

  constructor(private router: Router, private contentService: ContentService) {
  }

  ngOnInit() {
    this.contentService.addUser();
    this.contentService.getAllUsers().subscribe(res => {
      console.log(res);
    });
  }

  editMitarbeiter(id, name, consulting_level, region, photo) {
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('consulting_level', consulting_level);
    localStorage.setItem('region', region);
    localStorage.setItem('photo', photo);
    this.router.navigate(['/editSubordinate']);
  }

}
