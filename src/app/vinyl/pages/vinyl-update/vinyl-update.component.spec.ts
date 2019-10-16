import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylUpdateComponent } from './vinyl-update.component';

describe('VinylUpdateComponent', () => {
  let component: VinylUpdateComponent;
  let fixture: ComponentFixture<VinylUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinylUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
