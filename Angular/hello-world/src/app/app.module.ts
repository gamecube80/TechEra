import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { NameComponent } from './name/name.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NameComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, HelloComponent, NameComponent, UserComponent]
})

export class AppModule { }
