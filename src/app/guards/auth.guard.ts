import { Router } from "@angular/router";
import { config } from "../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(
        private router: Router
    ) {}

    canActivate() {

        if(localStorage.getItem(config.authEmail) != null && localStorage.getItem(config.authToken) != null) {
            return true;
        } else {
            this.router.navigate(['/autenticar-usuario']);
            return false;
        }
    }
}