import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearcherComponent } from './image-searcher.component';

describe('ImageSearcherComponentComponent', () => {
  let component: ImageSearcherComponent;
  let fixture: ComponentFixture<ImageSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSearcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
