import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

data = [
{
	title : "Bag 1",
	description: "This is small bag",
	price: "40",
	image: "bag1.jpg"
},
{
	title : "Bag 2",
	description: "This is medium bag",
	price: "100",
	image: "bag2.jpg"
},
{
	title : "Bag 3",
	description: "This is large bag",
	price: "140",
	image: "bag3.jpg"
}
];
  constructor(private toast: ToastController,private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
  console.log("Data bag", this.data);
  }

  async presentToast(message: any){
	  const toast = await this.toast.create({
	  	message: message,
	  	duration: 2000,
	  	position: 'bottom',
	  	color: 'dark'
	  });
   	  toast.present();
  }
  submit(item, id){
  	//this.data.splice(id, 1);
  	console.log("Data Bag", item);
  	console.log("Data id", id);


  	let navigationExtras: NavigationExtras = {
  		state : {
  			data: this.data[id]
  		}
  	}
  	this.router.navigate(['view'], navigationExtras);
  }

}
