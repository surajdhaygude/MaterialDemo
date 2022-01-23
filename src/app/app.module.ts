import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TypographyComponent } from './typography/typography.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconsComponent } from './icons/icons.component';
import { BadgesComponent } from './badges/badges.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleModule,RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { CreateappoinmentComponent } from './createappoinment/createappoinment.component';
import { DeleteappointmentComponent } from './deleteappointment/deleteappointment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NursedashboardComponent } from './nursedashboard/nursedashboard.component';
import { PhysiciandashboardComponent } from './physiciandashboard/physiciandashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonComponent,
    ButtonToggleComponent,
    IconsComponent,
    BadgesComponent,
    ScheduleComponent,
    EditAppointmentComponent,
    CreateappoinmentComponent,
    DeleteappointmentComponent,
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    NursedashboardComponent,
    PhysiciandashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ScheduleModule,
    RecurrenceEditorModule
 
    
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
