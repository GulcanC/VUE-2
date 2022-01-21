function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      // restrict special attacks
      currentRaund: 0,
      winner: null, //false:null
      logMessages: [],
      showModal: false,
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    useYourSpecialAttack() {
      return this.currentRaund != 5;
    },
    useMonsterSpecialAttack() {
      return this.currentRaund != 7;
    },
    yourRaund() {
      return (
        this.currentRaund != 0 &&
        this.currentRaund != 2 &&
        this.currentRaund != 4 &&
        this.currentRaund != 8 &&
        this.currentRaund != 10 &&
        this.currentRaund != 12 &&
        this.currentRaund != 14 &&
        this.currentRaund != 16 &&
        this.currentRaund != 18 &&
        this.currentRaund != 20 &&
        this.currentRaund != 22 &&
        this.currentRaund != 24 &&
        this.currentRaund != 26
      );
    },
    monsterRaund() {
      return (
        this.currentRaund != 1 &&
        this.currentRaund != 3 &&
        this.currentRaund != 6 &&
        this.currentRaund != 9 &&
        this.currentRaund != 11 &&
        this.currentRaund != 13 &&
        this.currentRaund != 15 &&
        this.currentRaund != 17 &&
        this.currentRaund != 19 &&
        this.currentRaund != 21 &&
        this.currentRaund != 23 &&
        this.currentRaund != 25 &&
        this.currentRaund != 27
      );
    },
    // normalde disabled. eğer monster health 6 dan küçük olursa aktif olacak.
    useMonsterHeal() {
      return this.monsterHealth > 6;
    },
    // normalde disabled. eğer player health 6 dan küçük olursa aktif olacak.
    usePlayerHeal() {
      return this.playerHealth > 6;
    },
    // opacity
    // opacity() {
    //   if (this.playerHealth <= 0 || this.monsterHealth <= 0) {
    //     return { opacity: "0" };
    //   }
    // },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    // burada sen saldırıyorsun. random sayılar ile (5-12 arasında)
    yourAttack() {
      this.currentRaund++;
      // const attackValue = Math.floor(Math.random() * (12 - 5)) + 5;
      const attackValue = getRandomValue(8, 12);
      this.monsterHealth -= attackValue;
      // ******ben burayı kaldırdım çünkü ikiside azalıyordu.
      //  this.monsterAttack();
      this.addLogMessage("player", "attack", attackValue);
    },
    // burada monster saldırıyor. random sayılar ile (8-15 arasında). monster daha güçlü saldırıyor
    monsterAttack() {
      this.currentRaund++;
      // const attackValue = Math.floor(Math.random() * (15 - 8)) + 8;
      const attackValue = getRandomValue(9, 13);
      this.playerHealth -= attackValue;
      this.addLogMessage("monster", "attack", attackValue);
    },
    // your special attack, everty three round
    yourSpecialAttack() {
      this.currentRaund++;
      const attackValue = getRandomValue(15, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "special-attack", attackValue);
    },

    // monster's special attack
    monsterSpecialAttack() {
      this.currentRaund++;
      const attackValue = getRandomValue(16, 26);
      this.playerHealth -= attackValue;
      this.addLogMessage("monster", "special-attack", attackValue);
    },
    // heal player

    healPlayer() {
      let healValue = getRandomValue(3, 6);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage("player", "heal", healValue);
    },

    // heal monster
    healMonster() {
      healValue = getRandomValue(3, 6);
      if (this.monsterHealth + healValue > 100) {
        this.monsterHealth = 100;
      } else {
        this.monsterHealth += healValue;
      }
      this.addLogMessage("monster", "heal", healValue);
    },
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      // restrict special attacks
      this.currentRaund = 0;
      this.winner = null; //false:null
      this.logMessages = [];
    },
    addLogMessage(who, what, value) {
      this.logMessages.push({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
