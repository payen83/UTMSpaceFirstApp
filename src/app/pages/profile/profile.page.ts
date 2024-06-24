import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  name: string;
  department: string;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async showAlert(){
    const alert = await this.alertController.create({
      header: 'Profile',
      message: 'My name is ' + this.name + ' from ' + this.department + " department",
      buttons: ['OK'],
    });

    await alert.present();
  }

}
