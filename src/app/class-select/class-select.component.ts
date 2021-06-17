import { Component, OnInit } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { PlayerClass } from '../player-class';
import { PLAYER_CLASS_LIST } from '../player-classes';

@Component({
  selector: 'app-class-select',
  templateUrl: './class-select.component.html',
  styleUrls: ['./class-select.component.css']
})
export class ClassSelectComponent implements OnInit {
  playerClass?: PlayerClass;
  playerClasses = PLAYER_CLASS_LIST;
  selectedPlayerClass?: PlayerClass;

  onSelect(selection: PlayerClass){
    this.selectedPlayerClass = selection;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
