import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MODULES = [
    MatToolbarModule, MatButtonModule, FlexLayoutModule, MatInputModule, MatFormFieldModule, 
    MatCardModule, MatIconModule, BrowserAnimationsModule
]

@NgModule({
    imports: MODULES,
    exports: MODULES
})

export class MaterialModule { }