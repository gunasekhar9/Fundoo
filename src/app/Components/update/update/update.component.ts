import { Component, OnInit, Inject,EventEmitter, Output } from '@angular/core';
import{ MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
@Output() updateNoteToRefresh = new EventEmitter<any>();

  title:any;
  description:any;
  noteId:any;
  constructor(private noteService : NoteService, public matDialogRef: MatDialogRef<UpdateComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log(this.data);
    this.title=this.data.title;
    this.description=this.data.description;
    this.noteId=this.data.id
  }

  update(){
    let reqData = {
      noteId:this.noteId,
      title:this.title,
      description:this.description
    }

    this.noteService.updatenotes(reqData).subscribe((Response:any)=>{console.log(Response);
    });
    this.matDialogRef.close()
  }
}
