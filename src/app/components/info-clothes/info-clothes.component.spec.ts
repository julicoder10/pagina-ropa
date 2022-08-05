import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoClothesComponent } from './info-clothes.component';

describe('InfoClothesComponent', () => {
  let component: InfoClothesComponent;
  let fixture: ComponentFixture<InfoClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoClothesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
