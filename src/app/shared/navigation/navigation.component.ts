import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CommonService } from 'src/app/service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isUserLoggedIn$!: Observable<any>;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isUserLoggedIn$ = this.commonService.isUserLoggedIn$;
  }

  onLogout(path: string): void {
    this.commonService.isUserLoggedIn(false);
    this.router.navigate([`/${path}`]);
  }

  navigateTo(path: string) {
    switch (path) {
      case 'logout':
        this.onLogout('login');
        break;

      default:
        this.router.navigate([`/${path}`]);
        break;
    }
  }
}
