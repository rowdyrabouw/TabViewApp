import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/tabview", pathMatch: "full" },
  { path: "welcome", loadChildren: "./components/welcome/welcome.module#WelcomeModule" },
  { path: "tabview", loadChildren: "./components/tabview/tabview.module#TabviewModule2" }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
