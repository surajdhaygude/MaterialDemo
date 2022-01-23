import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {
  list : any[] = []
  mySelect : any
  mySelect1 : any
  editAppoinment!: FormGroup;
  diagnosisList : any = [];
  isdiagnosis: boolean = true;
  constructor(private formBuilder:FormBuilder, private router:Router) { 
    this.editAppoinment = this.formBuilder.group({
      diagnosisCode: ['',Validators.required],
      diagnosisDescription: ['',Validators.required],
    })
  }

  ngOnInit(): void {

  }

  Timeslot=[
    "9:00 am - 10:00 am",
    "10:00 am - 11:00 am",
    "11:00 am - 12:00 pm",
    "12:00 pm - 1:00 pm",
    
  ];
  Description=[
    "food",
    "Fungi",
    "Drug",
    "Plant",
    "Venom or Salivary",
    "Other",
   ];
   Code=[
    "101",
    "102",
    "103",
    "104",
    "105",
    "105",
   ];

  option = [
    {id: 'y', name: 'YES'},
    {id: 'n', name: 'NO'},
   
  ];

  addDiagnosis(){
    // debugger;
    // this.diagnosisList.push(this.diagnosisdetails.value); 
    // this.diagnosisdetails.reset();
    // //this.resetDiagnosis();
    this.diagnosisList=this.editAppoinment.value
    console.log(this.diagnosisList)
    alert("Diagnosis Added successfully...!")
  }
  removeDiagnosis(element:any){
    this.diagnosisList.forEach((value: any, index:any)=>{
      if(value == element)
      this.diagnosisList.splice(index,1)
    });
  }
  Back(){
     this.router.navigateByUrl("medication");
  }



}
