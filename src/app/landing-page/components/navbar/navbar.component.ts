import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = 'Landing-page';
  register: boolean = false;
  auth!: string | null;
  email!: string;

  ngOnInit(): void {
    this.auth = localStorage.getItem('email');
    if ( this.auth !== null){
      this.email = this.auth;
      this.register = true;
    }
  }


}
