
import {Injectable} from "@angular/core";
import {Jsonp, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class SearchService
{
    constructor(private jsonp: Jsonp)
    {

    }

    searchterm (inputs: Observable<string>, debounceDefault: number = 400)  : Observable<Array<string>>
    {
       return inputs.debounceTime(400).distinctUntilChanged()
        .switchMap(f => this.search(f))
        ;
    }
    search (term : string)
    {
      let search = new URLSearchParams();
      search.set("action", "opensearch");
      search.set("search", term);
      search.set("format", "json");

      return this.jsonp.get("https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK", {search})
        .map(r => r.json()[1]);
    }
}
