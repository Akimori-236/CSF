import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'

const matModules: any[] = [
    MatToolbarModule, MatInputModule, MatFormFieldModule
]

@NgModule({
    imports: matModules,
    exports: matModules
})

export class MaterialModule {

}