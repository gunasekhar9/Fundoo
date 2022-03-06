import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.scss']
})
export class TakeNotesComponent implements OnInit {
 
  title:any;
  description:any;
  isExpanded = false;

  constructor( private noteService:NoteService) { }

  ngOnInit(): void { 
  }
  
  main()
  {
    return this.isExpanded == true ? (this.isExpanded = false) : (this.isExpanded = true);
  }
  

  add(){
      let reqData = {
        title:this.title,
        description:this.description
      }

  console.log(reqData)
  if(this.title && this.description)
  {
    this.noteService.takenotes(reqData).subscribe((Response:any) => {
      console.log(Response);
      localStorage.setItem("token",Response.id)},
      (error: any)=> {console.log(error);})
  }
  else{
    console.log("Form is not valid. Please Fill the form correctly");
  }
}
}
