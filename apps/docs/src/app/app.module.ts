import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NswwsImpactMatrixAngularModule} from '@nx-test/nswws-impact-matrix-angular';
import {defineCustomElements} from '../../../../dist/libs/nswws/impact-matrix/dist/loader';
import {FormsModule} from '@angular/forms';

defineCustomElements();
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NswwsImpactMatrixAngularModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
