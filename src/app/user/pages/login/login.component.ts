import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

import { containsValidator } from '../../../utilities/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameControl = new FormControl('', [
    Validators.required, 
    containsValidator('toto')
  ]);
  passwordControl = new FormControl('', [Validators.required]);

  form = new FormGroup({
    username: this.usernameControl,
    password: this.passwordControl
  })

  constructor(private router: Router,
    private userService: UserService) {}

  ngOnInit() {
    console.log('Initialisation')
    if (this.userService.isLogged()) {
      this.redirectUser();
    }
  }

  submit() {
    const logged = this.userService.login(
      this.usernameControl.value,
      this.passwordControl.value
    );

    if (logged) {
      this.redirectUser();
    }

  }

  redirectUser() {
    this.router.navigate(['user']);
  }
}
