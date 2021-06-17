//Total points budget for point-buy stat generation
export const POINT_BUY_MAXIMUM: number = 27;
//Maximum purchaseable ability score (does not count bonuses)
export const ABILITY_SCORE_MAXIMUM: number = 15;
//Minimum purchaseable ability score
export const ABILITY_SCORE_MINIMUM: number = 8;
//Number of ability scores
export const NUM_ABILITY_SCORES: number = 6;


/* The cost of each score is ordered, from 3 to 18.     *
 * Each cost is the total amount added or subtracted    *
 * from zero, e.g. going from 9 (which costs 1 point by *
 * default) to 10 (costs 2 points by default) is a      *
 * difference of 1 point, so while it looks like a score*
 * of 10 costs 1 point (from 9), the total cost is 2.   */
export const SCORE_COSTS: number[] = 
    [-9, -6, -4, -2, -1, 0, 1, 2, 3, 4, 5, 7, 9, 12, 15, 19];
  //[ 3,  4,  5,  6,  7, 8, 9,10,11,12,13,14,15, 16, 17, 18] <-ability scores
export const SCORE_REFERENCE: number[] =
    [3, 4, 5, 6, 7, 8, 9, 19, 11, 12, 13, 14, 15, 16, 17, 18]