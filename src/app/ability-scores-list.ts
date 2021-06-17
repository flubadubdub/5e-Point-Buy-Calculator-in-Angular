import { AbilityScore } from './ability-score';

/**export const ABILITY_SCORES: AbilityScore[] = [
    {name: 'Strength', value: 8},
    {name: 'Dexterity', value: 8},
    {name: 'Constitution', value: 8},
    {name: 'Intelligence', value: 8},
    {name: 'Wisdom', value: 8},
    {name: 'Charisma', value: 8},
]; **/

export const ABILITY_SCORES: AbilityScore[] = [
    new AbilityScore('Strength', 8),
    new AbilityScore('Dexterity', 8),
    new AbilityScore('Constitution', 8),
    new AbilityScore('Intelligence', 8),
    new AbilityScore('Wisdom', 8),
    new AbilityScore('Charisma', 8)
];