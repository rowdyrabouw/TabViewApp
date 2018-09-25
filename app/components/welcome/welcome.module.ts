import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TranslateModule } from "@ngx-translate/core";

import { WelcomeRoutingModule } from "./welcome-routing.module";
import { WelcomeComponent } from "./welcome.component";

@NgModule({
  imports: [NativeScriptCommonModule, TranslateModule, WelcomeRoutingModule],
  declarations: [WelcomeComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class WelcomeModule {}
