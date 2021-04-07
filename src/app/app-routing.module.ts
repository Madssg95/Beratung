import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ContactComponent} from './contact/contact.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {OurWorkComponent} from './our-work/our-work.component';


const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full'},
  { path: 'start', component: WelcomeComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'über-uns', component: AboutUsComponent },
  { path: 'wie-wir-arbeiten', component: OurWorkComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
