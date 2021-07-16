import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.page.html',
  styleUrls: ['./nav-item.page.scss'],
})
export class NavItemPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  showPage() {
    this.navCtrl.navigateForward('nav');
  }

}
