import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule, registerElement } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { MLKitModule } from '@nativescript/mlkit-core/angular';

import { BarcodeView } from '@nativescript-community/ui-barcodeview';
registerElement('BarcodeView', () => BarcodeView);

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, MLKitModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
