import { Component, OnInit, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrafficlightComponent } from './trafficlight/trafficlight.component';

@Component({
  selector: 'app-root',
  imports: [TrafficlightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
