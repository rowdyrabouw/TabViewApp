import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "nsdata",
  moduleId: module.id,
  templateUrl: "./data.component.html"
})
export class DataComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
