var warrior = {
  health: 100,
  damage: 89,

  remainingHealth: function () {
    return this.health - this.damage;
  },

  healthRemaining: function () {
    if (this.remainingHealth() > 0) {
      return `You're still up! with ${this.remainingHealth()} health remaining`;
    } else {
      return "You have fallen";
    }
  },
};

console.log(warrior.healthRemaining());
