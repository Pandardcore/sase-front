import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.css' ]
})
export class MainComponent implements OnInit {

  ngOnInit(): void {
    document.getElementById('navigation').style.display = 'none';
  }
}
