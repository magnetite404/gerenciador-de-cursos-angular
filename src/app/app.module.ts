import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';
import { Erro404Component } from './core/component/erro-404/erro-404.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,  
    HttpClientModule,
    CourseModule,
    CoreModule, 
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }, {
        path: '**', component: Erro404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
