<template>
  <div id="app">
    <div class="calculator">
      <div class="results" ref="results">
        <div :class="'action ' + (expression ? 'show' : '')">
          {{ expression }}
        </div>
        {{ enter }}
      </div>
      <div class="symbols noselect" ref="symbols">
        <div class="row">
          <div @click="setCurrentAction('√')" class="backGray">√</div>
          <div @click="setCurrentAction('+/-')" class="backGray">+/-</div>
          <div @click="setCurrentAction('%')" class="backGray">%</div>
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
    expression() {
      if (!this.action) return;
      return this.round(this.number1) + ' ' + this.action;
    },
    enter() {
      let res = this.result || this.number2 || this.number1 || 0;
      let lastSymbol = res.toString().slice(-1);
      res = lastSymbol === '.' || lastSymbol === '0' ? res : this.round(res);

      return res;
    }
  },
  methods: {
    round(exp) {
      return Math.round(exp*10000000)/10000000;
    },
    async setAction(action) {
      if (this.number2) {
        await this.setMathAction(this.action);
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
      if (this.result) {
        this.result = this.setMathAction(action, this.result);
        this.number1 = this.result;
        return;
      }
      if (this.number2) return this.number2 = this.setMathAction(action, this.number2);
      if (this.number1) return this.number1 = this.setMathAction(action, this.number1);
    },
    setNumber(num) {
      let isDot = num === '.';

      if (this.action) this.result = 0;
      if (!isDot && this.result) this.number1 = 0;
      if (isDot && this.isHasDot(this.result)) return;

      this.result = 0;
      let variable = 'number' + (this.action ? 2 : 1);

      if (this[variable].length > 8) return;
      if (isDot && this.isHasDot(this[variable])) return;
      if (this[variable] === '0' && num === '0') return;
      if (this[variable] == 0 && !isDot && !this.isHasDot(this[variable])) {
        this[variable] = num;
      } else {
        this[variable] += num
      }
    },
    isHasDot(variable) {
      return variable.toString().match(/\./);
    },
    reset() {
      this.action = null;
      this.number1 = 0;
      this.number2 = 0;
      this.result = 0;
    },
    setMathAction(action, res = 0) {
      if (action === '√') {
        return Math.sqrt(res);
      } else if (action === '+/-') {
        return -res;
      } else if (action === '%') {
        return res / 100;
      } else if (action === '+') {
        return this.number1 = +this.number1 + +this.number2;
      } else if (action === '-') {
        return this.number1 = this.number1 - this.number2;
      } else if (action === '*') {
        return this.number1 = this.number1 * this.number2;
      } else if (action === '/') {
        return this.number1 = !+this.number2 ? 0 : (this.number1 / this.number2);
      }
    },
    keyPress(e) {
      let action = e.key === 'Enter' ? '=' : e.key;
      if (!isNaN(+action) || action === '.') this.setNumber(action);
      if (this.actionMap.indexOf(action) !== -1) this.setAction(action);
    },
    onResize() {
      if (window.innerWidth > 500) {
        if (!this.$refs.symbols.childNodes[0].childNodes[0].style.height) return;
        return this.setBtnHeigth('');
      }

      let countBtns = this.$refs.symbols.childNodes[0].childNodes.length + 1;
      let height = (window.innerHeight - this.$refs.results.offsetHeight)/countBtns + 'px';
      this.setBtnHeigth(height);
    },
    setBtnHeigth(height) {
      this.$refs.symbols.childNodes.forEach(item => {
        item.childNodes.forEach(btn => {
          btn.style.height = height;
          btn.style.lineHeight = height;
        });
      });
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("keydown", this.keyPress);
    window.addEventListener("resize", this.onResize);
  }
}
</script>

<style>
  html {
    background: #383838;
    -webkit-tap-highlight-color: transparent;
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
    top: calc(50% - 340px);
    width: 400px;
    -webkit-box-shadow: 0 24px 38px 3px rgba(0,0,0,0.5), 0 9px 46px 8px rgba(0,0,0,0.2), 0 11px 15px -7px rgba(0,0,0,0.2);
    box-shadow: 0 24px 38px 3px rgba(0,0,0,0.5), 0 9px 46px 8px rgba(0,0,0,0.2), 0 11px 15px -7px rgba(0,0,0,0.2);
  }

  .action {
    font-size: 30px;
    height: 20px;
    line-height: 30px;
    color: white;
    transition: .3s;
    opacity: 0;
    transform: translateY(10px);
  }

  .results {
    height: 140px;
    text-align: end;
    padding: 20px;
    font-size: 65px;
    line-height: 170px;
    color: white;
    background-color: #191919;
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
    font-size: 35px;
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

  .backGray {
    background-color: #4a4a4a !important;
  }

  .backWhite {
    background-color: white !important;
    color: black !important;
  }

  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @media (max-width: 500px) {
    .results {
      height: 25vh;
      line-height: 35vh;
    }

    .action {
      line-height: 10vh;
    }

    .calculator {
      position: unset;
      left: unset;
      top: unset;
      width: unset;
    }

    .row div {
      width: 25%;
    }

    .row div:hover {
      opacity: 1;
    }

    .row div:active {
      opacity: 0.8;
    }
  }
</style>