interface IAbilityScore {
    name: string;
    value: number;
    //calculateModifier(): void;
    //incrementValue(): void;
    //decrementValue(): void;
}

export class AbilityScore implements IAbilityScore{
    name: string;
    value: number;
    modifier: number;

    constructor(name: string, value: number){
        this.name = name;
        this.value = value;
        this.modifier = this.calculateModifier();
    }

    incrementValue(){
        this.value++;
        this.updateModifier();
    }
    decrementValue(){
        this.value--;
        this.updateModifier();
    }

    calculateModifier(){ return Math.floor((this.value-10)/2); }
    updateModifier(){ this.modifier = this.calculateModifier(); }
}