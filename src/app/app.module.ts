import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyB0lb8QUR-DujxSnMloYN3f_FNUF90JM30',
      authDomain: 'ionic-github-explore-app.firebaseapp.com',
      projectId: 'ionic-github-explore-app',
      storageBucket: 'ionic-github-explore-app.appspot.com',
      messagingSenderId: '835466007501',
      appId: '1:835466007501:web:8bbc80103c4e6f18e6aa84',
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
