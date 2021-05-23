import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // isUserLoggedIn$!: Observable<any>;
  title = 'IOT-Blends';
  isUserLoggedin = false;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    // this.isUserLoggedIn$ = this.commonService.isUserLoggedIn$;
  }
}
