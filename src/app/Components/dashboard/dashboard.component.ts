import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  isExpanded= false;

  private _mobileQueryListener: () => void;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 603px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  archive(){
    this.router.navigate(['/home/archiveNotes']);
  }

  unarchive(){
    this.router.navigate(['/home/updateNotes']);
  }

  notes(){
    this.router.navigate(['/home/notes']);
  }

  trash(){
    this.router.navigate(['/home/trashNotes']);
  }

  LogOut(){
    localStorage.removeItem("token");
    this.router.navigate(["/login"])
  }

  permanentdelete(){
    this.router.navigate(['/home/archiveNotes']);
  }


}
