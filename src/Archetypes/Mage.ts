import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static createdAt = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage.createdAt += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this.createdAt;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;