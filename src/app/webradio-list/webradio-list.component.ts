import { Component, OnInit } from '@angular/core';
import { webradios } from '../webradios';
@Component({
  selector: 'app-webradio-list',
  templateUrl: './webradio-list.component.html',
  styleUrls: ['./webradio-list.component.css']
})
export class WebradioListComponent {
  webradios = webradios;
 
}