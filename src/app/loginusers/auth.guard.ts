import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Serviciologin } from './serviciologin.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private servicioLogin: Serviciologin, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const routeurl: string = state.url;
    return this.isLogin(routeurl);
  }

  isLogin(routeurl: string) {
    if (this.servicioLogin.isLoggedIn()) {
      return true;
    }
    
    this.servicioLogin.redirectUrl = routeurl;
    this.router.navigate(['/login'], { queryParams: { returnUrl: routeurl } });
    return false;
  }

  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/
}
