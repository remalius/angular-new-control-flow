import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogPhotosListComponent } from './dog-photos-list.component';

describe('DogPhotosListComponent', () => {
  let component: DogPhotosListComponent;
  let fixture: ComponentFixture<DogPhotosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogPhotosListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DogPhotosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
