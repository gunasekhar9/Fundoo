import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispalyNotesComponent } from './dispaly-notes.component';

describe('DispalyNotesComponent', () => {
  let component: DispalyNotesComponent;
  let fixture: ComponentFixture<DispalyNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispalyNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispalyNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
