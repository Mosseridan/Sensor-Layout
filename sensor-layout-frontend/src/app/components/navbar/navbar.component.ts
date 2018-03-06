import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  query: String;
  dropdownClass = { 'dropdown': true, 'open': false };

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.query = '';
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 5000 });
    this.router.navigate(['/login']);
    return false;
  }

  // onSearchSubmit() {
  //   //TODO:
  //   console.log('TODO: Search submit!');
  //   this.query = '';
  // }


  // toggleDropdown() {
  //   this.dropdownClass.open = !this.dropdownClass.open;
  // }
  // toggleTopmostDropdown() {
  //   this.topmostDropdownClass.open = !this.topmostDropdownClass.open;
  //   this.topRes = '';
  // }

}

