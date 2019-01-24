import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCoffee,
    faTachometerAlt,
    faFile,
    faCloud,
    faBoxes,
    faBars,
    faPoop,
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FontAwesomeModule
    ]
})
export class IconsModule {
    constructor() {
        // Add an icon to the library for convenient access in other components
        library.add(
            // Solid
            faCoffee,
            faTachometerAlt,
            faFile,
            faCloud,
            faBoxes,
            faBars,
            faPoop,
            faInfoCircle,
            // Brands
            faJava);
    }
}
