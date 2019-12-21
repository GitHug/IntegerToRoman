var intToRoman = function(num) {
    let result = ''

    while (num) {
      if (num >= 1000) {
        result += digits('M', Math.floor(num / 1000))
        num = num % 1000
      } else if (num >= 500) {
        if (num < 900) {
          result += digits('D', Math.floor(num / 500))
          num = num % 500
        } else {
          result += 'CM'
          num = num % 100
        }
      } else if (num >= 100) {
        if (num < 400) {
          result += digits('C', Math.floor(num / 100))
          num = num % 100
        } else {
          result += 'CD'
          num = num % 100
        }
      } else if (num >= 50) {
        if (num < 90) {
          result += digits('L', Math.floor(num / 50))
          num = num % 50
        } else {
          result += 'XC'
          num = num % 10
        }
      } else if (num >= 10) {
        if (num < 40) {
          result += digits('X', Math.floor(num / 10))
          num = num % 10
        } else {
          result += 'XL'
          num = num % 10
        }
      } else if (num >= 5) {
        if (num < 9) {
          result += 'V'
          num = num % 5
        } else {
          result += 'IX'
          num = 0
        }
      } else {
        if (num < 4) {
          result += digits('I', num)
        } else {
          result += 'IV'
        }
        num = 0
      }
    }

    return result
};

const digits = (char, n) => new Array(n).fill(char).join('')

intToRoman(58)