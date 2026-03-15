import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { faker } from '@faker-js/faker'

export interface VideoSuggestion {
  id: string,
  thumbnail: string,
  length: string,
  views: number,
  uploaderProfilePicture: string,
  uploaderName: string
  uploaderVerified: boolean,
  uploadDate: Date
}

@Injectable({
  providedIn: 'root',
})

export class VideoService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:4200/'

  getSuggestions(): Observable<any[]> {

    const suggestions: VideoSuggestion[] = Array.from({ length: 100 }).map(() => ({
      id: faker.string.uuid(),
      thumbnail: faker.image.urlPicsumPhotos(),
      length: faker.number.int({ max: 2 }) + ':' + faker.number.int({ max: 2 }),
      views: faker.number.int({ max: 100000 }),
      uploaderProfilePicture: faker.image.urlPicsumPhotos(),
      uploaderName: faker.internet.username(),
      uploaderVerified: faker.datatype.boolean(),
      uploadDate: faker.date.anytime()
    }));

    return of(suggestions);
    // return this.http.get<any[]>(this.apiUrl);
  }

  getVideoById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
