import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  initAuthState() {
    this.afAuth.authState.subscribe(user => {
      if (user)
        this.router.navigate(['/'])
      else
        this.router.navigate(['/login'])
    })
  }

  login(username, password) {
    this.afAuth.auth.signInWithEmailAndPassword(username, password)
      .then((res) => console.log(res))
      .catch(err => console.log(err))
  }

  register(username, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(username, password)
      .then((res) => console.log(res))
      .catch(err => console.log(err))
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
