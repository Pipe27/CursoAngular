import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* import { RouterModule, Routes } from '@angular/router'; */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';

/* const routes: Routes = [
  { path: 'header', component: HeaderComponent }
]; */

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
