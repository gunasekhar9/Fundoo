import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTrashNoteslistComponent } from './get-all-trash-noteslist.component';

describe('GetAllTrashNoteslistComponent', () => {
  let component: GetAllTrashNoteslistComponent;
  let fixture: ComponentFixture<GetAllTrashNoteslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllTrashNoteslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTrashNoteslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
