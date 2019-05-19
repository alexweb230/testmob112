import {Component, OnInit, ViewChild} from "@angular/core";
import {isAndroid} from 'tns-core-modules/platform';
import {SearchBar} from 'tns-core-modules/ui/search-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public sPlaceHolder: string = "пошук";

    public textLive: string = "live";

    public textUA: string = "украiнська";

    public textRU: string = "pociйська";

    active: boolean = true;
    activeSibling: boolean = false;

    toggleActive(){
        this.active = !this.active;
        this.activeSibling = !this.activeSibling;

    }
    public sBLoaded(args){
        let searchbar:SearchBar = <SearchBar>args.object;
        if(isAndroid){
            searchbar.android.clearFocus();
        }
    }

    navLIst = [
        "новости",
        "аналітика",
        "Архів",
        "телеканал",
        "хроніки 112",
        "Досьє"
    ]
}
