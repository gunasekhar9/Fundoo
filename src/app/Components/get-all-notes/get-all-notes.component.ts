import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';


@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  notesarray: any;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getallnotes()
  }

  autoRefresh(data: any) {
    console.log(data);
    this.getallnotes();

  }

  getallnotes() {
    this.noteService.getallnotes().subscribe((Response: any) => {
      this.notesarray = Response.data.data;
      this.notesarray.reverse();
      console.log(this.notesarray);
      this.notesarray = this.notesarray.filter((data: any) => {
        console.log(data.isDeleted)
        return data.isDeleted === false && data.isArchived === false;
      })
    })
  }
  colourchanged(e:any){
    console.log(e);
    this.getallnotes();
  }
  update(e:any){
    console.log(e);
    this.getallnotes();
  }
}
