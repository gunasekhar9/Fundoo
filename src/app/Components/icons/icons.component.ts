import { Token } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/noteService/note.service';
import { GetAllArchiveNoteslistComponent } from '../get-all-archive-noteslist/get-all-archive-noteslist.component';
import { GetAllTrashNoteslistComponent } from '../get-all-trash-noteslist/get-all-trash-noteslist.component';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
@Output() changeColorOfNote = new EventEmitter<any>();
@Input() noteId :any;
forviewTrash: boolean=false;
forviewArchive: boolean=false;


colours=['#f28b82','#fbbc04','#fff475','#ccff90','#a7ffeb', '#aecbfa','#d7aefb','#fdcfe8','#e6c9a8','#e8eaed','#f28b82','#fbbc04','#fff475','#fdcfe8','#e6c9a8','#0080ff']

  constructor(private noteService:NoteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let icon = this.route.snapshot.component;
    if(icon == GetAllTrashNoteslistComponent){
      this.forviewTrash = true;
      console.log(this.forviewTrash);
    }
    if(icon == GetAllArchiveNoteslistComponent){
      this.forviewArchive = true;
      console.log(this.forviewArchive);
    }
    console.log(this.noteId);
  }

  remove(){
    console.log(this.noteId);
    let reqdata= {    
      noteIdList: [this.noteId.id],
      isDeleted: true, 
    }

    this.noteService.removenotes(reqdata).subscribe((Response:any)=>{
      console.log(Response);
      this.changeColorOfNote.emit("Note is Deleted");
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
      this.changeColorOfNote.emit("Note is archived");
  })
  }

  colourpallete(notecolor:any){

    this.noteId.notecolor=notecolor;
    let reqdata={
      noteIdList:[this.noteId.id],
      color:notecolor
    }
    this.noteService.colorpallete(reqdata).subscribe((Response:any)=>{
      console.log(Response);
      this.changeColorOfNote.emit(notecolor);
  })
  }

  restore(){
    
    console.log(this.noteId);
    let reqdata= {    
      noteIdList: [this.noteId.id],
      isDeleted: false, 
    }
    this.noteService.removenotes(reqdata).subscribe((Response:any)=>{
      console.log(Response);
  })
  this.changeColorOfNote.emit("Note is Restored");
  }


  unarchive(){
    console.log(this.noteId);
    let reqdata= {    
      noteIdList: [this.noteId.id],
      isArchived: false, 
    }

    this.noteService.archiveNotes(reqdata).subscribe((Response:any)=>{
      console.log(Response);
      this.changeColorOfNote.emit("Note is unarchived");
  })
  }

  permanentdelete(){
    console.log(this.noteId);
    let reqData = {
      noteIdList: [this.noteId.id],
      isDeleted: true, 
    }
    this.noteService.deletepermanently(reqData).subscribe((response:any)=> {console.log(response);});
    this.changeColorOfNote.emit("permanently Deleted");
  }

}