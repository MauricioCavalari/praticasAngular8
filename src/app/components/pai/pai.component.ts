import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss']
})
export class PaiComponent implements OnInit {

@Output() informacaPai = "Nome: Mauricio";

  constructor() { }

  ngOnInit() {
  }

}
