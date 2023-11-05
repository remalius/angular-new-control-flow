import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsService } from "./dogs.service";
import { toSignal } from "@angular/core/rxjs-interop";
import { DogPhotosListComponent } from "./dog-photos-list/dog-photos-list.component";

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [CommonModule, DogPhotosListComponent],
  templateUrl: './dogs.component.html',
  styleUrl: './dogs.component.scss'
})
export class DogsComponent {
  dogsService: DogsService = inject(DogsService);
  dogPhotos: Signal<string[]> = toSignal(this.dogsService.getDogPhotos(), {initialValue: []});
}
