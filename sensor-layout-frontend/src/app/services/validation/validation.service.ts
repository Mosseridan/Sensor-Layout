import { Injectable } from '@angular/core';
import { User } from '../../types';

@Injectable()
export class ValidationService {

  constructor() { }

  validateName(name: string){
    const nameRegExp = /^[A-Za-z]+$/;
    return nameRegExp.test(name);
  }
  
  validateEmail(email: string) {
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegExp.test(email);
  }

  validateUsername(username: string){
    const usernameRegExp = /^[\w]+$/;
    return usernameRegExp.test(username);
  }

  validatePassword(password: string){
    const passRegExp = /^[\S]+$/;    
    return passRegExp.test(password);
  }
  
  validateRegister(user: User){
    if(!this.validateName(user.fname))
      return {success: false, msg:'Please enter a valid first name.'};
    if(!this.validateName(user.lname))
      return {success: false, msg:'Please enter a valid last name.'};
    if(!this.validateEmail(user.email))
      return {success: false, msg:'Please enter a valid email.'};
    if(!this.validateUsername(user.username))
      return {success: false, msg:'Please enter a valid username.'};
    if(!this.validatePassword(user.password))
      return {success: false, msg:'Please enter a valid password.'};
    return {success: true, msg:'All good.'};
  }

  validateLogin(user){
    if(!this.validateUsername(user.username))
      return {success: false, msg:'Please enter a valid username.'};
    if(!this.validatePassword(user.password))
      return {success: false, msg:'Please enter a valid password.'};
    return {success: true, msg:'All good.'};
  }

    validatePost(user){
    return {success: true, msg:'All good.'};
  }
  
}
