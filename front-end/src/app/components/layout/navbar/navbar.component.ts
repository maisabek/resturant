import { Component, OnInit,HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingScreenService } from 'src/app/services/loading-screen/loading-screen.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isSignedIn=false
  constructor(public authService:AuthService,public loaderService:LoadingScreenService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') !== null){
      this.isSignedIn=true
    }else{
      this.isSignedIn=false
    }
  }
  onActivate(event) {
    window.scroll(0,0);
}

  logout(){
    this.authService.logout()
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 0 ||
      document.documentElement.scrollTop > 0) {
      document.getElementById('navbar').classList.add('pos');
    } else {
      document.getElementById('navbar').classList.remove('pos');

    }
  }
}
