import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-all-trash-noteslist',
  templateUrl: './get-all-trash-noteslist.component.html',
  styleUrls: ['./get-all-trash-noteslist.component.scss']
})
export class GetAllTrashNoteslistComponent implements OnInit {
  trashNotes:any

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getalltrashnotes();
  }


  getalltrashnotes()
  {
    this.noteService.gettrashNotesList().subscribe((Response:any)=>{
      this.trashNotes=Response.data.data;
      console.log(this.trashNotes);
    },error=>{console.log(error);});
  }

}
