import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number {
    return this.lifePoints;
  }

  public get strength(): number {
    return this.strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.lifePoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this.lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
}

export default Monster;