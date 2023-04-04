import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PostResponse } from '../models/PostResponse';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  imgData = "";

  constructor(private http: HttpClient) { }

  upload(form: any, image: Blob) {
    // CREATE CONTAINER FOR BLOB + FORM VALUES
    const formData = new FormData();
    // FILL IT
    formData.set("title", form['title']);
    formData.set("complain", form['complain']);
    formData.set("imageFile", image);

    // POST METHOD
    return firstValueFrom(this.http.post<PostResponse>("/upload", formData));
  }
}
