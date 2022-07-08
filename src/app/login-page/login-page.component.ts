import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  credentials = {username: '', password: ''};

  constructor(private authecticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
  }

  authenticate() {
    this.authecticationService.authenticate(this.credentials, () => this.router.navigateByUrl('/image'));
    return false;
  }

}
