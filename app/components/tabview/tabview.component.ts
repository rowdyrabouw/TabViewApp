import { Component, OnInit, AfterViewInit } from "@angular/core";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import { Router } from "@angular/router";

import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "ns-tabview",
  moduleId: module.id,
  templateUrl: "./tabview.component.html",
  styleUrls: ["./tabview.component.css"]
})
export class TabviewComponent implements OnInit {
  initFinished = false;

  constructor(private translateService: TranslateService, private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      console.log("done");
      this.initFinished = true;
    }, 500);
  }

  onSelectedIndexChanged(args: SelectedIndexChangedEventData) {}
}
