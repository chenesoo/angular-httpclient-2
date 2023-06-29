import { Component, OnInit } from '@angular/core';
import { Photo, PicsumPhoto } from './photo.model';
import { PhotoService } from './photo.service';
import { PicsumPhotoService } from './picsum-photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  photoList: Photo[] | undefined;
  picsumPhotoList: PicsumPhoto[] | undefined;

  photoNumber: number = 10;
  photoPage: number = 1;
  photoPageString: string = '1';

  // per la gestione della visualizzazione delle singole liste
  viewPhotoList: boolean = false;
  viewPicsumPhotoList: boolean = false;

  constructor(
    private photoService: PhotoService,
    private picsumPhotoService: PicsumPhotoService
  ) {}

  ngOnInit(): void {
    this.updatePhotoList();
  }

  updatePhotoList() {
    if (this.viewPhotoList) {
      this.photoService.getPhotoList().then((x) => {
        if (x != null) {
          // pagina N ( N = this.photoPage )
          this.photoList = x.slice(
            (this.photoPage - 1) * this.photoNumber,
            this.photoPage * this.photoNumber
          );
        }
      });
    }

    if (this.viewPicsumPhotoList) {
      this.picsumPhotoService.getPicsumPhotoList().then((x) => {
        if (x != null) {
          // pagina N ( N = this.photoPage )
          this.picsumPhotoList = x.slice(
            (this.photoPage - 1) * this.photoNumber,
            this.photoPage * this.photoNumber
          );
        }
      });
    }
  }
  //
  // Per gestire gli eventi dei pulsanti che abilitano
  // la visualizzazione delle singole liste
  //
  onButtonJSONPlaceholder() {
    this.viewPhotoList = !this.viewPhotoList;
    this.updatePhotoList();
  }

  onButtonPicsum() {
    this.viewPicsumPhotoList = !this.viewPicsumPhotoList;
    this.updatePhotoList();
  }

  onPageDown() {
    this.photoPage = Number(this.photoPage) - 1;
    if (this.photoPage < 1) this.photoPage = 1;
    this.photoPageString = String(this.photoPage);
    this.updatePhotoList();
  }

  onPageUp() {
    this.photoPage = Number(this.photoPage) + 1;
    this.photoPageString = String(this.photoPage);
    this.updatePhotoList();
  }

  onPageInput() {
    const p = Number(this.photoPageString);
    if (Number.isNaN(p) || p < 1) {
      this.photoPageString = String(this.photoPage);
    } else {
      this.photoPage = Math.floor(p);
      this.updatePhotoList();
    }
  }
}
