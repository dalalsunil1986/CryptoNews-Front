import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



api = "http://localhost:2000/";
data:any;

  constructor(private spinner: NgxSpinnerService) { 
    
  }

  ngOnInit() {
   
    this.getNews().then(e=>{
      console.log(this.data)
    })

  }


  async getNews(){

    setTimeout(() => {
      this.spinner.show();
    }, 1);


    return new Promise((res,rej)=>{

      fetch(this.api).then(d=>{
        return d.json();
      }).then(da=>{
        this.data = da;
      }).then(()=>{
          res();  
          this.spinner.hide();// resolve the promise;
      }).catch(e=>{
          rej(e); 
      }) // reject the promise 


    })

  }


}
