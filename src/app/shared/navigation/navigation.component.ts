import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { CommonService } from 'src/app/service/common.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isUserLoggedIn$!: Observable<any>;
  isSideNavVisible: boolean = true;
  @ViewChild('drawer') public sidenav!: MatSidenav;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      tap((result) => {
        if (!result) {
          this.isSideNavVisible = false;
        } else {
          this.isSideNavVisible = true;
        }
      }),
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

  navToggle() {
    this.sidenav.toggle();
    this.isSideNavVisible = !this.isSideNavVisible;
  }
}
