import { Component , OnInit} from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent  {

public user$: Observable <any> = this.authSvc.afAuth.user;

  constructor( private authSvc: AuthService, private router: Router) { }


  // tslint:disable-next-line:typedef
 async onLogout()
  {
    try
    {
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    }
    catch (error)
    {
     console.log(console.error());

    }

  }
}
