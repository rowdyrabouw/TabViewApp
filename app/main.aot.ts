// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScript } from "nativescript-angular/platform-static";

import { AppModuleNgFactory } from "./app.module.ngfactory";

// Registration of additional elements. This must be executed from within main.ts and main.aot.ts files.
import * as elementRegistryModule from "nativescript-angular/element-registry";
elementRegistryModule.registerElement("Carousel", () => require("nativescript-carousel").Carousel);
elementRegistryModule.registerElement("CarouselItem", () => require("nativescript-carousel").CarouselItem);

platformNativeScript().bootstrapModuleFactory(AppModuleNgFactory);
