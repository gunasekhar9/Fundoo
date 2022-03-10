import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NoteService {
  token: any

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem("token")
  }

  takenotes(data: any) {
    let headersObject = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.token
        }
      )
    }
    console.log("take notes is called in service", data)
    return this.httpService.postService('/notes/addNotes', data, true, headersObject)
  }

  getallnotes() {


    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("get-all-notes is called in service notes");
    return this.httpService.getService('/notes/getNotesList',true, headersObject)
  }


  removenotes(data: any) {
    {
      let headersObject = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.token
        })
      }
      console.log("Delete note called");
      return this.httpService.postService('/notes/trashNotes', data, true, headersObject)
    }
  }

  updatenotes(data: any) {
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("update notes called");
    return this.httpService.postService('/notes/updateNotes', data, true, headersObject)
  }

  archiveNotes(data: any) {
    {
      let headersObject = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.token
        })
      }
      console.log("archive note called");
      return this.httpService.postService('/notes/archiveNotes', data, true, headersObject)
    }
  }

  getarchiveNotesList(){
    {
      let headersObject = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.token
        })
      }
      console.log("get archive notes list is called");
      return this.httpService.getService('/notes/getArchiveNotesList',true, headersObject)
    }
  }

  gettrashNotesList(){
    {
      let headersObject = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.token
        })
      }
      console.log("get Trash notes list is called");
      return this.httpService.getService('/notes/getTrashNotesList',true, headersObject)
    }
  }

  colorpallete(data: any) {
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("colour pallete in notes called");
    return this.httpService.postService('/notes/changesColorNotes', data, true, headersObject)
  }

  deletepermanently(data: any) {
    let headersObject = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    console.log("permanent delete note is called");
    return this.httpService.postService('/notes/deleteForeverNotes', data, true, headersObject)
  }

  unarchiveNotes(data: any) {
    {
      let headersObject = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.token
        })
      }
      console.log("un archive note called");
      return this.httpService.postService('/notes/updateNotes', data, true, headersObject)////archive to add notes
    }
  }


}