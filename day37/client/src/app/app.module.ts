import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './components/upload.component';
import { CameraComponent } from './components/camera.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';
//>>> npm install ngx-webcam
import { CameraService } from './services/camera.service';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    WebcamModule
  ],
  providers: [CameraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
