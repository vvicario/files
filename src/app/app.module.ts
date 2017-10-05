import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileListComponent } from './file-list/file-list.component';
import { AppRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { FilesService } from './services/files.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FileListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, { enableTracing: false }),
    HttpModule, 
  ],
  providers: [FilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
