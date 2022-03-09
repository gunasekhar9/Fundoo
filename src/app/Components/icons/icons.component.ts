import { Token } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
@Input() noteId :any;

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
  }

  remove(){
    console.log(this.noteId);
    let reqdata= {    
      noteIdList: [this.noteId.id],
      isDeleted: true, 
    }

    this.noteService.removenotes(reqdata).subscribe((Response:any)=>{
      console.log(Response);
  })
  }



  archive(){
    console.log(this.noteId);
    let reqdata= {    
      noteIdList: [this.noteId.id],
      isArchived: true, 
    }

    this.noteService.archiveNotes(reqdata).subscribe((Response:any)=>{
      console.log(Response);
  })
  }
}