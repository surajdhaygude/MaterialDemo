import { Component, OnInit } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService, View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-schedule',
 // templateUrl: './schedule.component.html',
 providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService],
 template: `<ejs-schedule  [selectedDate]='selectedDate' [currentView]='currentView' [eventSettings]='eventSettings'></ejs-schedule>`,
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }
  public selectedDate: Date = new Date(2021, 12, 18);

public currentView: View = 'Day';
public eventSettings: EventSettingsModel = {

  dataSource: [

  {

      Id: 1,

      Subject: 'Explosion of Betelgeuse Star',

      StartTime: new Date(2021, 12, 15, 9, 30),

      EndTime: new Date(2021, 12, 15, 11, 0)

  }, {

      Id: 2,

      Subject: 'Thule Air Crash Report',

      StartTime: new Date(2021, 12, 12, 12, 0),

      EndTime: new Date(2021, 12, 12, 14, 0)

  }]
}

  ngOnInit(): void {
  }
  // public searchText : any = "";
  //  list: any[] = [
  //   {
  //     EmployeeId : "1",
  //     EmployeeName: 'Sachin',
  //     DateOfJoining: '02/03/2021',
  //     status: "Active",
  //   },
  //   {
  //     EmployeeId : "2",
  //     EmployeeName : 'Rahul',
  //     DateOfJoining: '02/03/2021',
  //     status: "InActive",
  //   }
  // ]
  // mySelect : any;
  // mySelect1 : any
  // Onchangephy(e : any){
  //   debugger;
  //   this.mySelect=e.target.value;
  //   console.log(e.target.value)
  //   console.log(e.target);
    
     
  //  }

}
