import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidationService } from '../../services/validation/validation.service';
import { AuthService } from '../../services/auth/auth.service';
import { User, newUser, formatName} from '../../types';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidationService,
    private authService: AuthService) { }

  ngOnInit() {
     this.user = newUser();
  }

  onRegisterSubmit(){
    
    this.user.fname = formatName(this.user.fname);
    this.user.lname = formatName(this.user.lname);
    // Validate Fields
    const valid = this.validateService.validateRegister(this.user);
    if(!valid.success){
      this.flashMessage.show(valid.msg, {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    // Register User
    this.authService.registerUser(this.user).subscribe((data) => {
      if(data.success){
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 5000});
      }else{
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
      }
      this.router.navigate(['/']);      
    });
    
  }

}
