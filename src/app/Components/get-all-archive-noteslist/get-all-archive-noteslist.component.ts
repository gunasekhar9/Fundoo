import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-all-archive-noteslist',
  templateUrl: './get-all-archive-noteslist.component.html',
  styleUrls: ['./get-all-archive-noteslist.component.scss']
})
export class GetAllArchiveNoteslistComponent implements OnInit {
  archiveNotes:any;

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getallarchivenotes();
  }

  getallarchivenotes()
  {
    this.noteService.getarchiveNotesList().subscribe((Response:any)=>{
      this.archiveNotes=Response.data.data;
      console.log(this.archiveNotes);
    },error=>{console.log(error);});
  }

}
