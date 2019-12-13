import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-call',
  templateUrl: './call.page.html',
  styleUrls: ['./call.page.scss'],
})
export class CallPage implements OnInit {
  type:any;

  constructor(public activateRoute: ActivatedRoute, public http: HttpClient) { 
    this.type = activateRoute.snapshot.params['type'];
    // if(t == '1'){
    //   this.type = 'Conta de água'
    // }
    // if(t == '2'){
    //   this.type = 'Conta de luz'
    // }
    // if(t == '3'){
    //   this.type = 'Conta de telefone'
    // }
    // if(t == '4'){
    //   this.type = 'Fatura'
    // };

    this.call()
  }

  ngOnInit() {
    
  }

  call(){
    let username = localStorage.getItem('username')
    let phonenumber = localStorage.getItem('phonenumber');
    const msg = `Você confirma o pagamento da sua ${this.type}, no valor de Oitenta e dois Reais, e noventa centavos, com o vencimento em: Quinze de Janeiro de dois mil e vinte?, Para confirmar, digite, um, caso contrário pode desligar.`;
    this.http.get(`https://i9educa.herokuapp.com/pagsenior/${username}/${phonenumber}/${msg}`).subscribe(()=>{
    console.log('success');
    
    },(err)=>{
      console.log(err);
      
    })
  }

}
