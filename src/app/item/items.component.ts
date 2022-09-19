import { Component, OnInit } from '@angular/core'
import { MLKitView, DetectionType, DetectionEvent } from '@nativescript/mlkit-core';
import { BarcodeFormats, BarcodeResult } from '@nativescript/mlkit-barcode-scanning';
import { RouterExtensions } from '@nativescript/angular';
import { ScanResult } from '@nativescript-community/ui-barcodeview';


@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {

  pauseScanning: boolean;
  camera: MLKitView;
  detectorType = DetectionType.Barcode;
  barcodeFormats = [BarcodeFormats.QR_CODE];
  isPaused = false;
  torchOn = false;

  constructor(public routerExtension: RouterExtensions
    ) {
    this.pauseScanning = false;
  }

  ngOnInit(): void {
  }

  public onMlKitLoaded(args) {
    this.camera = args.object;
    if (this.camera) {
      if (!this.camera.hasCameraPermission()) {
        this.camera.requestCameraPermission();
      }
      this.camera.pause = false;
      this.camera.torchOn = false;
    }
  }

  onBarcodePluginStoreCodeScanResult(result: ScanResult): void {
    console.log(result.text);
  }

  public onMlKitDetection(event: DetectionEvent) {
    if (event.type === DetectionType.Barcode) {
      let bc: any;
      if (event && event.data && event.data.length > 0) {
        bc = event.data[0];
      }
      else {
        bc = event.data;
      }
      console.log(bc.displayValue);
    }
  }

  public onNavigateTap() {
    this.routerExtension.navigate(['/item', '1']);
  }
  public onNavigateAndClearTap() {
    this.routerExtension.navigate(['/item', '1'], { clearHistory: true });
  }

}
