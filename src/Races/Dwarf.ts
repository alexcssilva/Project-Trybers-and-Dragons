import Race from './Race';

class Dwarf extends Race {
  static createdAt = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.createdAt += 1;
    this._maxLifePoints = 80;
  }
  
  static createdRacesInstances(): number {
    return this.createdAt;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;