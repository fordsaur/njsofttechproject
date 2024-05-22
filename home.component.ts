import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  details: any;
  constructor(private apiservice:ApiserviceService , private router:Router) {
    // console.log('below constructor is called');
  }


  ngOnInit(){
 this.getMethod();
  }

  dataCollection:any
  getMethod(){
    console.log("data")
    this.apiservice.getvalue().subscribe((data:any)=>{
      // console.log(data['Data'])
       this.dataCollection=JSON.parse(data['Data'])
    })
  }


  addtoCart(prod_id:number){
    const body = {
      ECODE: 101,
      PROD_ID: prod_id,
      QTY: 5,
      APIKEY: 'AKJBBFSD5588R41SDF'
    };
    this.apiservice.addToCart(body).subscribe(
      (response) => {
        alert("Data has been added succesfully");
      },
      error => {
        alert("There is a problem in Addding data");
      }
    )
  }

  routerNavigate(pathid:any){
 this.router.navigate([`/details/`+pathid])
  }

}
