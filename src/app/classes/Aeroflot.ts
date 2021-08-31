export class Aeroflot {
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

    cost += this.km * 4;

    if (this.weight > 20) {
      return -1;
    }
    if (this.weight < 5) {
      return cost;
    } else {
      return cost + 4000;
    }
  }
  proTicketCost() {
    let cost = 0;
    cost += this.km * 8;
    if (this.age < 7) {
      cost *= 0.7;
    }
    if (this.weight > 50) {
      return -1;
    }
    if (this.weight < 20) {
      return cost;
    } else {
      return cost + 5000;
    }
  }

  luxTicketCost() {
    let cost = 0;
    cost += this.km * 15;
    if (this.age < 16) {
      cost *= 0.7;
    }
    if (this.weight > 50) {
      return -1;
    }
    return cost;
  }
}
