import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from "@ionic/angular";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading:boolean = false;
  user = {
    name: '',
    phonenumber: ''
  }

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) { }

  ngOnInit() {
  }

  go(){
    if(this.user.name !='' && this.user.phonenumber !=''){
      this.isLoading = true; 
    setTimeout(() => {
      this.isLoading = false; 

      localStorage.setItem('username' ,this.user.name)
      localStorage.setItem('phonenumber' ,this.user.phonenumber)

      this.navCtrl.navigateRoot(['/home']);

    }, 2000);
    }else{
      this.showAlert('Por favor preencha com seu Nome e Número celular')
    }
  }

  async showAlert(message){
    let alert = await this.alertCtrl.create({
      header: 'Ops!',
      message: message,
      buttons: ['Entendi!']
    })
    return await alert.present()
  }

}
