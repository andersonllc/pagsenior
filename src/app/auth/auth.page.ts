import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading:boolean = false;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  go(){
    this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false; 
      this.navCtrl.navigateRoot(['/home'])
    }, 2000);
  }

}
