import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TranslateModule } from "@ngx-translate/core";

import { DataComponent } from "./data/data.component";
import { AboutComponent } from "./about/about.component";
import { TabviewRoutingModule } from "./tabview-routing.module";
import { TabviewComponent } from "./tabview.component";

@NgModule({
  imports: [TranslateModule, NativeScriptCommonModule, TabviewRoutingModule],
  declarations: [TabviewComponent, DataComponent, AboutComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TabviewModule2 {}
