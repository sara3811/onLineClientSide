import { Component, OnInit } from '@angular/core';
import { BookAppointment } from '../bookAppointment.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.page.html',
  styleUrls: ['./make-appointment.page.scss'],
})
export class MakeAppointmentPage implements OnInit {
  
  selectedService: any;
  days: any[];
  hours: any[];
  selectedDay: any;
  selectedHour: any;
  preAlert: number;

  constructor(private appointmentService: BookAppointment,private router:Router, private alertController:AlertController) { }

  ngOnInit() { }

  SetSelectedService(service: any) {
    this.selectedService = service;
    console.log('selectedService:',this.selectedService);
    this.loadDays();
  }
  // http://localhost:52764/appointment/optionalDays?serviceId=1
  // http://localhost:52764/appointment/optionalHours?serviceId=1&day=3
 
  loadDays() {
    this.appointmentService.loadDays(this.selectedService).subscribe(days => {
      this.days = days
      console.log('days:',days);
    },
    error=>{console.log(error.error.Message);
      this.presentAlert(error.error.Message);
    })
  }


 
  setHour(hour) {
    this.selectedHour = hour;
  }

  cancelSelectHour(){
    this.selectedHour = null;
  }

  confirmTurn() {
    let date: Date;
    date = new Date(this.selectedDay+" "+this.selectedHour);
    console.log("date:",date);
    
    this.appointmentService.makeAppointment
    ({ PreAlert: this.preAlert, ServiceId: this.selectedService, EstimatedHour:this.selectedDay+" "+this.selectedHour})
      .subscribe((verificationCode => {
         console.log(verificationCode);
        this.appointmentService.verificationCode = verificationCode;
        this.router.navigate(['/process-complete']);
       
      }))
    
  }
  
  segmentChanged(ev: any) {
    let day= ev.detail.value;
    console.log('Segment2',day);
    this.selectedDay = day.split("T")[0];
    this.appointmentService.loadHoursPerDay(this.selectedService, this.selectedDay).subscribe((hours => {
      console.log('hours:',hours);
      this.hours = hours;
    }))
  }

  cancelSelectDay(){
    this.selectedDay=null;
  }

  async presentAlert(text) {
    const alert = await this.alertController.create({
      header: 'שים לב',
      message: '<strong>לא ניתן להזמין תורים מראש בשירות זה. בחר שירות אחר<\strong>',
      buttons: ['X']
    });
    await alert.present();
  }
  
}