import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
})
export class JumbotronComponent implements OnInit {
  animationItem: AnimationItem | undefined;
  options: AnimationOptions = {
    path: 'https://assets1.lottiefiles.com/private_files/lf30_4FGi6N.json',
    autoplay: true,
    loop: true,
  };
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  constructor() {}

  ngOnInit(): void {}
}
