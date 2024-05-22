import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ApiserviceService } from './apiservice.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
details: any;
  constructor(private apiservice:ApiserviceService , private router:Router) {
    // console.log('below constructor is called');
  }


  ngOnInit(){
 this.getMethod();
 this.cartProductLength()
  }

  dataCollection:any
  getMethod(){
    console.log("data")
    this.apiservice.getvalue().subscribe((data:any)=>{
      // console.log(data['Data'])
       this.dataCollection=JSON.parse(data['Data'])
    })
  }

  routerNavigate(pathid:any){
 this.router.navigate([`/details/`+pathid])
  }

  clearCart(){
    const body={
      ECODE:101,
      APIKEY:`AKJBBFSD5588R41SDF`
    }
    this.apiservice.clearCart(body).subscribe(response=>{
      console.log(response),
      alert("cart has been cleared")
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    },error=>{
      alert("error while clearing the cart");
    }
  )
  }

  datalength:any
  cartProductLength(){
    this.apiservice.cartProductDetails(101).subscribe({
      next: (data: any) => {
       this.datalength = JSON.parse(data['Data']);
      //  console.log("datalength",this.datalength.length);
       
      },
    });
  }
}
