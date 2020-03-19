import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AutocompleteLibModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
