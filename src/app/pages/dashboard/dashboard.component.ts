import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { ISite, ResponseModel } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private _masterS:MasterService){}

  siteList : ISite[] = [];

  ngOnInit(){
    this.getSites()
  }

  getSites(){
    this._masterS.getSitesByClientId().subscribe((res:ResponseModel)=>{
      this.siteList = res.data;
    })
  }
}
