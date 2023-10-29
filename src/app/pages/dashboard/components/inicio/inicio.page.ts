import { Component, OnInit, ViewChild } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  usuarios;

  @ViewChild(IonList) ionList: IonList;
  constructor(private requestService: RequestService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.getAll();
  }

  private getAll(){
    this.requestService.getAll().subscribe({
      next: (resp) => {
        this.usuarios = resp;
      },
      error: (error) => {
        this.presentToast(error.message);
      }
    })
  }

  public favorite(user: any) {
    console.log('favorite', user);
    this.ionList.closeSlidingItems();
  }

  public share(user: any) {
    console.log('share', user);
    this.ionList.closeSlidingItems();
  }

  public delete(user: any) {
    console.log('delete', user.name);
    this.ionList.closeSlidingItems();
  }

  private async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      cssClass: 'toast-class',
      message,
      position: 'top',
      translucent: true,
      duration: 2000
    });
    toast.present();
  }

}
