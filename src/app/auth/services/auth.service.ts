import { Injectable } from '@angular/core';
import {auth} from 'firebase/app';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';
import {User} from 'firebase';
import { AngularFireModule } from '@angular/fire';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {

  public user: User;
  public errorMensaje: any = '';

  constructor(public afAuth: AngularFireAuth) { }

// tslint:disable-next-line:typedef
async login( email: string, password: string)
{
  try{
    const result = await this.afAuth.signInWithEmailAndPassword (email, password);
    return result;
  }
 catch (error)
 {

   console.log(error);
 }

}
// tslint:disable-next-line:typedef
async register(email: string, password: string)
{
  try{
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    return result;
  }
  catch (error)
  {
    console.log(error);
  }

}
// tslint:disable-next-line:typedef
async logout()
{
  try
  {
    await this.afAuth.signOut();
  }

  catch (error)
  {
    console.log(error);
  }

}
// tslint:disable-next-line:typedef
getCurrentUser()
{
  try
  {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
  catch (error)
  {
    console.log(error);
  }
}
}
