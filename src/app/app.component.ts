import { DataService } from "./services/data.service";
import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [DataService]
})
export class AppComponent {
  public keyword = "name";

  public data$: Observable<any[]>;
  public keywords = ["name", "capital", "region"];

  constructor(private dataSvc: DataService) {
    this.getData();
  }

  getData(): void {
    this.data$ = this.dataSvc.getAllCountries();
  }
}
