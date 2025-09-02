import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IBuilding, IFloor, ISite, ResponseModel } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule , FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private _masterS:MasterService){}

  siteList : ISite[] = [];
  buildingList : any[] =[];
  floorList : any[] = [];
  parkingSpotArray : number[]=[];

  siteId: number = 0;
  buildingId: number = 0;
  floorId: number = 0;

  ngOnInit(){
    this.getSites()
  }

  getSites(){
    this._masterS.getSitesByClientId().subscribe((res:ResponseModel)=>{
      this.siteList = res.data;
    })
  }

  getBuilding(){
    this._masterS.getBuildingBySiteId(this.siteId).subscribe((res:ResponseModel)=>{
      this.buildingList = res.data
    })
  }

   getFloor(){
    this._masterS.GetFloorsByBuildingId(this.buildingId).subscribe((res:ResponseModel)=>{
      this.floorList = res.data
    })
  }
  onFloorSelect(){
    const floor = this.floorList.find((m: any)=> m.floorId == this.floorId);
    for (let index = 1 ; index <= floor.totalParkingSpots ; index++){
      this.parkingSpotArray.push(index);
    }
  }
}
