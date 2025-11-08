import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trafficlight',
  imports: [],
  templateUrl: './trafficlight.component.html',
  styleUrl: './trafficlight.component.css'
})
export class TrafficlightComponent implements OnInit {
  currentLight: 'red' | 'yellow' | 'green' = 'red';
  private timerHandle: any;

  ngOnInit(): void {
    this.startBasicTrafficLight();
  }

  startBasicTrafficLight(): void {
    this.currentLight = 'red';

    this.timerHandle = setTimeout(() => {
      this.switchToGreen();
    }, 12000);
  }
  switchToGreen() {
    this.currentLight = 'green';

    this.timerHandle = setTimeout(() => {
      this.switchToYellow();
    }, 6000)
  }
  switchToYellow() {
    this.currentLight = 'yellow';

    this.timerHandle = setTimeout(() => {
      this.startBasicTrafficLight();
    }, 3000)
  }

  ngOnDestroy(): void {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
    }
  }
}
