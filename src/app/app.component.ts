import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MaterialDemo';


  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  diagnosis=[
    "food",
    "Fungi",
    "Drug",
    "Plant",
    "Venom or Salivary",
    "Other",
  ];

  option = [
    {id: 'y', name: 'YES'},
    {id: 'n', name: 'NO'},
   
  ];

   Allery: FormGroup = this.formBuilder.group({
   Typeofallery :['' , Validators.required],
   alleryname :['',Validators.required]   
   });

 
   sideBarOpen = true;
 
   sideBarToggler() {
     this.sideBarOpen = !this.sideBarOpen;
   }
}
