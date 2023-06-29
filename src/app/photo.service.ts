import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhotoList(): Promise<Photo[] | undefined> {
    return this.http
      .get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
      .toPromise();
  }
}
