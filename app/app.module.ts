import { isIOS } from "platform";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { TNSFontIconModule } from "nativescript-ngx-fonticon";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { LanguageService } from "./services/language.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// for AoT compilation
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    HttpClientModule,
    NativeScriptModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    AppRoutingModule,
    TNSFontIconModule.forRoot({
      fa: "assets/css/font-awesome-vendor.css"
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        deps: [HttpClient],
        useFactory: createTranslateLoader
      }
    })
  ],
  providers: [LanguageService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
