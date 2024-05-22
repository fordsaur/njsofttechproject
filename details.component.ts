import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  constructor(
    private _emp: ApiserviceService,
    private _router: ActivatedRoute,
    private _route: Router
  ) {}
  id: any;
  fname: any = '';

  ngOnInit(): void {
    this._emp.cartProductDetails(101).subscribe({
      next: (data: any) => {
       this.fname = JSON.parse(data['Data']);
      },
    });
  }

  deleteCart(prod_id:any){
    const obj={
      ECODE:101,
      PROD_ID:prod_id,
      APIKEY:"AKJBBFSD5588R41SDF"
    }
    this._emp.deleteCart(obj).subscribe(
      (data) => {
        alert("Data has been Deleted succesfully");
        setTimeout(() => {
           window.location.reload()
        }, 1000);
      },
      error => {
        alert("There is a problem in deleting data");
      }
    )
  }
}
