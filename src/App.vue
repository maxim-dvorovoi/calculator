<template>
  <div id="app">
    <div class="calculator">
      <div class="results">
        <div :class="'action ' + (view ? 'show' : '')">
          {{ view }}
        </div>
        {{ this.round(result) || this.round(number2) || this.round(number1) }}
      </div>
      <div class="symbols">
        <div class="row">
          <div @click="setCurrentAction('√')">√</div>
          <div @click="setCurrentAction('+/-')">+/-</div>
          <div @click="setCurrentAction('%')">%</div>
          <div @click="setAction('/')" class="backWhite">/</div>
        </div>
        <div class="row">
          <div @click="setNumber('7')">7</div>
          <div @click="setNumber('8')">8</div>
          <div @click="setNumber('9')">9</div>
          <div @click="setAction('*')" class="backWhite">*</div>
        </div>
        <div class="row">
          <div @click="setNumber('4')">4</div>
          <div @click="setNumber('5')">5</div>
          <div @click="setNumber('6')">6</div>
          <div @click="setAction('-')" class="backWhite">-</div>
        </div>
        <div class="row">
          <div @click="setNumber('1')">1</div>
          <div @click="setNumber('2')">2</div>
          <div @click="setNumber('3')">3</div>
          <div @click="setAction('+')" class="backWhite">+</div>
        </div>
        <div class="row">
          <div @click="reset()">AC</div>
          <div @click="setNumber('0')">0</div>
          <div @click="setNumber('.')">.</div>
          <div @click="setAction('=')" class="backOrange">=</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      number1: 0,
      number2: 0,
      result: 0,
      action: null,
      actionMap: ['/', '*', '-', '+', '=']
    };
  },
  computed: {
    view() {
      if (!this.action) return;
      return this.round(this.number1) + ' ' + this.action;
    }
  },
  methods: {
    round(exp) {
      return Math.round(exp*1000000000)/1000000000;
    },
    setAction(action) {
      if (this.number2) {
        if (this.action === '+') {
          this.number1 = +this.number1 + +this.number2;
        } else if (this.action === '-') {
          this.number1 = this.number1 - this.number2;
        } else if (this.action === '*') {
          this.number1 = this.number1 * this.number2;
        } else if (this.action === '/') {
          if (this.number2 == '0') {
            this.number1 = 0;
          } else {
            this.number1 = this.number1 / this.number2;
          }

        }

        this.number2 = 0;
      }

      if (action === '=' ) {
        this.result = this.number1;
        this.action = null;
        return;
      }

      this.action = action;
    },
    setCurrentAction(action) {
      if (action === '√') {
        if (this.result) return this.result = Math.sqrt(this.result);
        if (this.number2) return this.number2 = Math.sqrt(this.number2);
        if (this.number1) return this.number1 = Math.sqrt(this.number1);
      } else if (action === '+/-') {
        if (this.result) return this.result = -this.result;
        if (this.number2) return this.number2 = -this.number2;
        if (this.number1) return this.number1 = -this.number1;
      } else if (action === '%') {
        if (this.result) return this.result = this.result / 100;
        if (this.number2) return this.number2 = this.number2 / 100;
        if (this.number1) return this.number1 = this.number1 / 100;
      }
    },
    setNumber(num) {
      if (!this.action) {
        if (this.result) {
          if (num === '.') return this.number1 += num;
          this.number1 = num;
          this.result = 0;
          return;
        }

        if (this.number1.length > 10) return;
        if (num === '.') return this.number1 += num;
        this.number1 = this.number1 === 0 ? num : this.number1 + num;
        return;
      }

      this.result = 0;
      if (this.number2.length > 10) return;
      if (num === '.') return this.number2 += num;

      this.number2 = this.number2 === 0 ? num : this.number2 + num;
    },
    reset() {
      this.action = null;
      this.number1 = 0;
      this.number2 = 0;
      this.result = 0;
    },
    keyPress(e) {
      let action = e.key === 'Enter' ? '=' : e.key;
      if (!isNaN(+action) || action === '.') this.setNumber(action);
      if (this.actionMap.indexOf(action) !== -1) this.setAction(action);
    }
  },
  mounted() {
    window.addEventListener("keydown", this.keyPress);
  }
}
</script>

<style>
  html {
    background: #fff url("./assets/texture.png");
  }

  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .calculator {
    position: absolute;
    left: calc(50% - 200px);
    top: calc(50% - 320px);
    width: 400px;
    -webkit-box-shadow: 0 8px 17px 2px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2);
    box-shadow: 0 8px 17px 2px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2);
  }

  .action {
    font-size: 20px;
    height: 20px;
    line-height: 20px;
    color: white;
    transition: .3s;
    opacity: 0;
    transform: translateY(10px);
  }

  .results {
    height: 100px;
    text-align: end;
    padding: 20px;
    font-size: 50px;
    line-height: 120px;
    color: white;
    background-color: #32303e;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .results .show{
    opacity: 1;
    transform: translateY(0);
  }

  .row div {
    display: inline-block;
    width: 100px;
    line-height: 100px;
    font-size: 25px;
    color: white;
    background-color: dimgray;
    cursor: pointer;
    transition: .2s;
  }

  .row div:hover {
    opacity: 0.8;
  }

  .backOrange {
    background-color: orange !important;
  }

  .backWhite {
    background-color: white !important;
    color: black !important;
  }
</style>