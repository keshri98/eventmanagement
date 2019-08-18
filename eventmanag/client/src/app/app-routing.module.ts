import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TicketsComponent } from './tickets/tickets.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdmiinComponent } from './admiin/admiin.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdeventComponent } from './adevent/adevent.component';
import { ParticipationComponent } from './participation/participation.component';
const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'',component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'participation',component:ParticipationComponent},
  {path:'adevent',component:AdeventComponent},
  {path:'event',component:EventsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'tickets',component:TicketsComponent},
  {path:'ourteam',component:OurteamComponent},
  {path:'admiin',component: AdmiinComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
