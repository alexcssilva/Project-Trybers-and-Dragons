import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static createdAt = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger.createdAt += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this.createdAt;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;