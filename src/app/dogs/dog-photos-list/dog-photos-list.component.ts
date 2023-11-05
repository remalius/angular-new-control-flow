import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dog-photos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog-photos-list.component.html',
  styleUrl: './dog-photos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogPhotosListComponent {
  @Input() dogPhotos: string[] = [];
}
