import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from 'src/app/Components/update/update/update.component';
import { DataService } from 'src/app/services/dataservice/data.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  @Input() allnotes : any;
  @Output() changeColorOfNote = new EventEmitter<any>();
  @Output() updateNoteToRefresh = new EventEmitter<any>();
  title:any;
  description:any;
  searchkey:any

  constructor(public matDialog:MatDialog, private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.receiveddata.subscribe((Response:any)=>{
      console.log(Response);
      this.searchkey=Response;
    })
  }
  openDialog(note : any){
    let dialogRef = this.matDialog.open(UpdateComponent, {width:'650px', data:note});
    dialogRef.afterClosed().subscribe(result=>{this.title;this.description;
    this.updateNoteToRefresh.emit('hii')
  });
  }

  colourchanged(e:any){
  console.log(e);
  this.changeColorOfNote.emit("colour")
  }
}   