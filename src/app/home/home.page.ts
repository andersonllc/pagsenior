import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selected:string = '';
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private barcodeScanner: BarcodeScanner) {}

  scan(type?){
    if(this.selected !=''){
      this.barcodeScanner.scan().then((data:any) =>{
        localStorage.setItem('data', JSON.stringify(data));
        this.navCtrl.navigateForward(['/detail', this.selected])
      }).catch((err)=>{
        this.showAlert(err)
      })
    }else{
      this.showAlert('Por favor escolha um tipo de conta para continuar')
    }
  }

  select(item){
    this.selected = item
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
