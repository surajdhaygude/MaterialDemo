import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleteappointment',
  templateUrl: './deleteappointment.component.html',
  styleUrls: ['./deleteappointment.component.css']
})
export class DeleteappointmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Timeslot=[
    "9:00 am - 10:00 am",
    "10:00 am - 11:00 am",
    "11:00 am - 12:00 pm",
    "12:00 pm - 1:00 pm",
    
  ]

}
