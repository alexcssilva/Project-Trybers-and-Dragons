import Race from './Race';

class Halfling extends Race {
  static createdAt = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.createdAt += 1;
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    return this.createdAt;
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;