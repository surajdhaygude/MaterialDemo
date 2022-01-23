import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createappoinment',
  templateUrl: './createappoinment.component.html',
  styleUrls: ['./createappoinment.component.css']
})
export class CreateappoinmentComponent implements OnInit {

  mySelect : any
  mySelect1 : any
  createAppointment!: FormGroup;
  diagnosisList : any = [];
  isdiagnosis: boolean = true;
  constructor(private formBuilder:FormBuilder, private router:Router) { 
    this.createAppointment = this.formBuilder.group({
      
    })
  }

  ngOnInit(): void {

  }

  Timeslot=[
    "9:00 am - 10:00 am",
    "10:00 am - 11:00 am",
    "11:00 am - 12:00 pm",
    "12:00 pm - 1:00 pm",
    
  ]
  
}
