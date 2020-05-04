import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  constructor() { }


  public MandaMsg(num1:number, num2:number): void{
    alert(num1 + num2);
  }

  ionViewWillEnter() {
    //this.MandaMsg(2,2);
  }

  ngOnInit() {
  }

}
