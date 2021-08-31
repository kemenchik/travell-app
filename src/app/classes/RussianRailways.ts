export class RussianRailways {
  km :number;
  age: number;
  weight: number;

  constructor(km: number, age: number, weight: number) {
    this.km = km;
    this.age = age;
    this.weight = weight;
  }

  economyTicketCost() {
    let cost = 0;
    cost += this.km * 0.5;
    if (this.age < 5) {
      cost *= 0.5;
    }
    if (this.weight > 50) {
      return -1;
    }
    if (this.weight > 15) {
      return cost + this.weight * 50;
    }
    return cost;
  }

  proTicketCost() {
    let cost = 0;
    cost += this.km * 2;
    if (this.age < 8) {
      cost *= 0.7;
    }
    if (this.weight > 60) {
      return -1;
    }
    if (this.weight > 20) {
      return cost + this.weight * 50;
    }
    return cost;
  }
  luxTicketCost() {
    let cost = 0;
    cost += this.km * 4;
    if (this.age < 16) {
      cost *= 0.8;
    }

    if (this.weight > 60) {
      return -1;
    }
    return cost;
  }

}
