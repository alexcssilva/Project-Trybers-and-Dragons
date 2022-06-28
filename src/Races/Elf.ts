import Race from './Race';

class Elf extends Race {
  static createdAt = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.createdAt += 1;
    this._maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    return this.createdAt;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;