import { Component } from '@angular/core';

@Component({
  selector: 'app-face-snap-g1',
  standalone: true,
  imports: [],
  templateUrl: './face-snap-g1.component.html',
  styleUrl: './face-snap-g1.component.scss'
})
export class FaceSnapG1Component {
  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  ngOnInit(){
    this.title ='Archibald';
    this.description ='Mon meilleur ami depuis tout petit !'
    this.createDate = new Date();
    this.snaps = 6;

  }
  

}

