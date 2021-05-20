import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LoadingScreenService } from 'src/app/services/loading-screen/loading-screen.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {
  // loading: boolean = false;

  // loadingSubscription: Subscription;

  // constructor(private loadingScreenService: LoadingScreenService) {
  // }

  // ngOnInit() {
  //   this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(
  //     debounceTime(5000)
  //   ).subscribe((value) => {
  //     this.loading = value;
  //   });
  // }

  // ngOnDestroy() {
  //   this.loadingSubscription.unsubscribe();
  // }
ngOnInit(){}
}
