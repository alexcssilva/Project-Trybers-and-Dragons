import Race from './Race';

class Orc extends Race {
  static createdAt = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.createdAt += 1;
    this._maxLifePoints = 74;
  }
  
  static createdRacesInstances(): number {
    return this.createdAt;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;