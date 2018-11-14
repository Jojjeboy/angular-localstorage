import { Component, OnInit } from '@angular/core';
import { AngularNgLocalstorageService } from 'projects/angular-ng-localstorage/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-localstorage-lib';

  constructor (private angularNgLocalstorageService: AngularNgLocalstorageService) {
  }

  ngOnInit() {
    this.angularNgLocalstorageService.init({
      initData: [
        {
          id: 1,
          name: 'first'
        },
        {
          id: 1,
          name: 'second'
        }
      ],
      initialStep: 4
    }, 'testing localStorage v2');
  }
}
