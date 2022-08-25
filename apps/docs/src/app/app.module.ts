import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NswwsImpactMatrixAngularModule} from '@nx-test/nswws-impact-matrix-angular';
import {defineCustomElements} from '../../../../dist/libs/nswws/impact-matrix/loader';

defineCustomElements();
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NswwsImpactMatrixAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
