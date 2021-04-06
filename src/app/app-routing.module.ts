import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ContactComponent} from './contact/contact.component';
import {WelcomeComponent} from './welcome/welcome.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'kontakt', component: ContactComponent },
  { path: 'welcome', component: WelcomeComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
