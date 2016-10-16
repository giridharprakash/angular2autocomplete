import { Component } from '@angular/core';
import {SearchService} from "./shared/SearchService";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  search$  = new  Subject<string>();

  private items : Array<string>;
  constructor(private searchService: SearchService)
  {
    //this.search$ = new Subject<string>();
    this.searchService.searchterm(this.search$, 400).subscribe(res => this.items = res);
  }


}
