import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-porgress-bar',
  templateUrl: './porgress-bar.component.html',
  styleUrls: ['./porgress-bar.component.css']
})
export class PorgressBarComponent implements OnInit {
    @Input() backgroundColor = '#d9d9d9';
    @Input() progressColor = '#4CAF50' ;
    @Input() width = 50;
  constructor() { }

  ngOnInit() {
  }

}
