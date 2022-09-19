import { Component, OnInit } from '@angular/core'
import { Application, ApplicationEventData, Trace } from '@nativescript/core';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

constructor() {

}

public ngOnInit() {
  Trace.setCategories(Trace.categories.concat(Trace.categories.Error, Trace.categories.Debug));
  Trace.enable();

  Application.on(Application.suspendEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        Trace.write('app.component onInit - suspendEvent - Activity: ' + args.android, Trace.categories.Debug);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        Trace.write('app.component onInit - suspendEvent - UIApplication: ' + args.ios, Trace.categories.Debug);
    }
  });
  
  Application.on(Application.resumeEvent, (args: ApplicationEventData) => {
    Trace.write('app.component onInit - App resume event', Trace.categories.Debug);
  });
  
}


}
