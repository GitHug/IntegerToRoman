var intToRoman = function(num) {
    let result = ''

    const values = [
      { value: 1000, roman: 'M' },
      { value: 500, roman: 'D', sub: { value: 900, roman: 'CM' }},
      { value: 100, roman: 'C', sub: { value: 400, roman: 'CD' }},
      { value: 50, roman: 'L', sub: { value: 90, roman: 'XC' }},
      { value: 10, roman: 'X', sub: { value: 40, roman: 'XL' }},
      { value: 5, roman: 'V', sub: { value: 9, roman: 'IX' }},
      { value: 1, roman: 'I', sub: { value: 4, roman: 'IV' }}
    ]

    values.forEach(({ value, roman, sub }) => {
      if (num >= value) {
        if (!sub || num < sub.value) {
          result += digits(roman, Math.floor(num / value))
          num = num % value
        } else {
          result += sub.roman
          num -= sub.value
        }
      }
    })

    return result
};

const digits = (char, n) => new Array(n).fill(char).join('')

intToRoman(1994)