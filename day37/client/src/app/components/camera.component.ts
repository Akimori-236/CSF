import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CameraService } from '../services/camera.service';
import { WebcamComponent, WebcamImage } from 'ngx-webcam';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements AfterViewInit, OnDestroy {
  // THIS COMPONENT IS INSTALLED WITH NGX-WEBCAM
  @ViewChild(WebcamComponent)
  webcam!: WebcamComponent

  // display size
  width = 400;
  height = 400;

  // CAMERA IO
  tempPicFilenames: string[] = []
  shutter = new Subject<void>;
  cameraFeedSub$!: Subscription

  constructor(private router: Router,
    private cameraSvc: CameraService) { }

  ngAfterViewInit(): void {
    this.webcam.trigger = this.shutter
    this.cameraFeedSub$ = this.webcam.imageCapture.subscribe(
      (img) => { this.snapshot.bind(img) }
    )
  }
  ngOnDestroy(): void {
    this.cameraFeedSub$.unsubscribe()
  }

  pressShutter() {
    this.shutter.next()
  }

  snapshot(webcamImg: WebcamImage) {
    this.cameraSvc.imgData = webcamImg.imageAsDataUrl;
    this.tempPicFilenames.push(webcamImg.imageAsDataUrl);
  }

}
