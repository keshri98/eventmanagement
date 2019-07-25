import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EventsComponent,
    GalleryComponent,
    TicketsComponent,
    OurteamComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    AdmiinComponent,
    UpdateComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
