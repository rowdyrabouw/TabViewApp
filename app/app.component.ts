import { Component, OnInit } from "@angular/core";

import { LanguageService } from "./services/language.service";

@Component({
  selector: "app",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.initLanguage();
  }
}
