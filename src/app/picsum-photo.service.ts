import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PicsumPhoto } from './photo.model';

@Injectable({
  providedIn: 'root',
})
export class PicsumPhotoService {
  constructor(private http: HttpClient) {}

  getPicsumPhotoList(): Promise<PicsumPhoto[] | undefined> {
    return this.http
      .get<PicsumPhoto[]>('https://picsum.photos/v2/list')
      .toPromise();
  }
}
