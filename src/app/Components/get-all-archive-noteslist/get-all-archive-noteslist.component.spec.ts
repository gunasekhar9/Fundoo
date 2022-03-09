import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllArchiveNoteslistComponent } from './get-all-archive-noteslist.component';

describe('GetAllArchiveNoteslistComponent', () => {
  let component: GetAllArchiveNoteslistComponent;
  let fixture: ComponentFixture<GetAllArchiveNoteslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllArchiveNoteslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllArchiveNoteslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
