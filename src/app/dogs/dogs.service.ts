import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

export type DogApiResponse = {
  message: string[]
}

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  httpClient: HttpClient = inject(HttpClient);

  getDogPhotos(): Observable<string[]> {
    return this.httpClient.get<DogApiResponse>('https://dog.ceo/api/breed/spaniel/cocker/images')
      .pipe(
        map((response: DogApiResponse) => response.message)
      )
  }
}
