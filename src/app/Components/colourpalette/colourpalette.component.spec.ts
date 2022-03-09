import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourpaletteComponent } from './colourpalette.component';

describe('ColourpaletteComponent', () => {
  let component: ColourpaletteComponent;
  let fixture: ComponentFixture<ColourpaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColourpaletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourpaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
