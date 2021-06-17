import { Component, OnInit, Input } from '@angular/core';
import { AbilityScore } from '../ability-score';
import { ABILITY_SCORES } from '../ability-scores-list';
import { POINT_BUY_MAXIMUM, ABILITY_SCORE_MAXIMUM, ABILITY_SCORE_MINIMUM, SCORE_COSTS, NUM_ABILITY_SCORES } from '../point-buy-constants';

@Component({
  selector: 'app-ability-scores',
  templateUrl: './ability-scores.component.html',
  styleUrls: ['./ability-scores.component.css']
})
export class AbilityScoresComponent implements OnInit{
  abilityScores = ABILITY_SCORES;
  scoreCosts = SCORE_COSTS;
  abilityScore?: AbilityScore;
  points: number;
  currentCostIndeces: number[];

  constructor() {
    /*Initialize currentCostIndeces by finding the (or one of the)  *
    * ability scores set to cost 0 points, initializing the array to*
    * the size of ABILITY_SCORES and filled with the index found by *
    * findZeroCost().                                               */
    this.currentCostIndeces = Array(ABILITY_SCORES.length).fill(this.findZeroCost());
    this.points = this.calcPoints();
  }
  ngOnInit(): void { }

  onIncrementClick(index: number){ 
    //If at the maximum number of points, return without incrementing
    //if(this.points === POINT_BUY_MAXIMUM){ return; }

    /*If attempting to increment an ability score beyond its designated *
     *maximum, return without incrementing.                             */
    if(this.abilityScores[index].value === ABILITY_SCORE_MAXIMUM){ return; }

    //increment the index of the corresponding score cost index
    this.currentCostIndeces[index]++;

    this.points = this.calcPoints();
    this.abilityScores[index].incrementValue(); 
  }

  onDecrementClick(index: number){ 
    
    /*If attempting to decrement value beyond its designated minimum,   *
    *return without decrementing.                                       */
    if(this.abilityScores[index].value === ABILITY_SCORE_MINIMUM){ return; }
    
    this.currentCostIndeces[index]--;

    this.points = this.calcPoints();
    //Increment the Ability Score's value
    this.abilityScores[index].decrementValue();
  }

  /*Calculate the sum of the current point costs.*/
  calcPoints(){
    let currentPoints = 0;
    for(let i = 0; i < NUM_ABILITY_SCORES; i++){
      currentPoints += SCORE_COSTS[this.currentCostIndeces[i]];
    }
    return currentPoints;
  }

  findZeroCost(){
    const zeroCost = (element: number) => element === 0;
    return SCORE_COSTS.findIndex(zeroCost);
  }

  /*If the user goes over the maximum allowed point value, turn the text*
  * red to indicate a problem.                                          */
  getColor(){
    if(this.points > POINT_BUY_MAXIMUM)
      return 'red';
    else
      return 'black';
  }

}