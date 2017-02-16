import {Component} from '@angular/core';
import {AF} from "../providers/af";
import {Router} from "@angular/router";

/**
 * The Main App Component
 *
 * Checks if the user is logged in; and redirect them to the login page if not logged in.
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    /**
     * Used on template to toggle links/etc.
     */
    public isLoggedIn: boolean;

    constructor(public afService: AF, private router: Router) {
        /**
         * This asynchronously checks if our user is logged it and will automatically redirect them to the Login page when
         * the status changes. This is just a small thing that Firebase does that makes it easy to use.
         */
        this.afService.af.auth.subscribe(
            (auth) => {
                console.log("AUTH: ", auth);

                /**
                 * if auth is null; then set isLoggedIn to false and route to login.
                 */
                if (auth == null) {
                    this.isLoggedIn = false;
                    this.router.navigate(['login']);
                }
                /**
                 * When auth is NOT null set the Display Name and Email so we can attribute messages to them.
                 * 
                 * Currently options are just set to google or email.
                 */
                else {
                    if (auth.google) {
                        this.afService.displayName = auth.google.displayName;
                        this.afService.email = auth.google.email;
                    } else {
                        this.afService.displayName = auth.auth.email;
                        this.afService.email = auth.auth.email;
                    }

                    this.isLoggedIn = true;
                    this.router.navigate(['']);
                }
            }
        );
    }

    /**
     * Logout calls the [AF Injectable]{@link AF} call to logout.
     */
    logout() {
        this.afService.logout();
    }
}
