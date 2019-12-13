import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  
  type:any;
  data = JSON.parse(localStorage.getItem('data'));

  constructor(public activateRoute: ActivatedRoute) { 
    let t = activateRoute.snapshot.params['type'];
    if(t == '1'){
      this.type = 'Conta de água'
    }
    if(t == '2'){
      this.type = 'Conta de luz'
    }
    if(t == '3'){
      this.type = 'Conta de telefone'
    }
    if(t == '4'){
      this.type = 'Fatura'
    }
  }

  ngOnInit() {
  }

}
