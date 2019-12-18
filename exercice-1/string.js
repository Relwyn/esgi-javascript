/**
 *
 *
 * @param {*} str
 * @returns
 */
function isStr (str) {
  try {
    if (typeof str !== 'string') {
      return false;
      //throw ('The variable sent is not a string');
    }
    if (str.length === 0) {
      return false;
      //throw ('The string sent is empty');
    }
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
}


/**
 ** return the str with the first letter in maj
 *
 * @param {*} str
 * @returns
 */
function ucfirst(str) {
  try {
    if (!isStr(str)) {
      throw('Please check the data sent thx');
    }
    return str[0].toUpperCase() + str.substring(1);
  } catch (error) {
    console.log('ucfirst error');
    console.log(error);
    return error;
  }
}

/**
 ** return the string sent with the first letter of each word in capital and the rest in lowercase
 *
 * @param {*} str
 * @returns
 */
function capitalize(str) {
  try {
    if (!isStr(str)) {
      throw('Please check the data sent thx');
    }
    return (str.toLowerCase().match(/\S+/g) || []).map(function(item) {
      return ucfirst(item);
    }).join(' ');
  } catch (error) {
    console.log('capitalize error');
    console.log(error);
    return error;
  }
}

/**
 ** return the string sentence in camelCase
 *
 * @param {*} str
 * @returns
 */
function camelCase(str) {
  try {
    if (!isStr(str)) {
      return '';
    }
    return (str.toLowerCase().match(/\S+/g) || []).map(function(item) {
      return ucfirst(item);
    }).join('');
  } catch (error) {
    console.log('camelCase error');
    console.log(error);
    return error;
  }
}

/**
 ** return the string sentence in snakeCase
 *
 * @param {*} str
 * @returns
 */
function snakeCase(str) {
  try {
    if (!isStr(str)) {
      throw('Please check the data sent thx');
    }
    return (str.toLowerCase().match(/\S+/g) || []).join('_');
  } catch (error) {
    console.log('snakeCase error');
    console.log(error);
    return error;
  }
}

/**
 ** return the string with number replacing vowels
 *
 * @param {*} str
 * @returns
 */
function leet(str) {
  try {
    let res = '';
    let vowels =
    {
      'a': '4',
      'e': '3',
      'i': '1',
      'o': '0',
      'u': '(_)',
      'y': '7'
    };
    if (!isStr(str)) {
      throw('Please check the data sent thx');
    }
    for (cpt in str ) {
      res += typeof vowels[str[cpt].toLowerCase()] === 'undefined' ? str[cpt] : vowels[str[cpt].toLowerCase()];
    }
    return res;
  } catch (error) {
    console.log('leet error');
    console.log(error);
    return error;
  }
}

function prop_access(obj, path) {
  try {
    if (!isStr(path)) {
      return '';
    }
    if (path === '') {
      return null
    }
    let data = {...obj};
    let dir = [];
    if (!isStr(path)) {
      return obj;
    }
    for (value of path.split('.')) {
      if (typeof data[value] === 'undefined') {
        return dir.join('.');
      }
      dir.push(value);
      data = data[value];
    }
    return data;
  } catch (error) {
    console.log('prop_access error');
    console.log(error);
    return error;
  }
}

function verlan(str) {
  try {
    return (str.match(/\S+/g) || []).map(function(item) {
      return item.split('').reverse().join('');
    }).join(' ');
  } catch (error) {
    console.log('verlan error');
    console.log(error);
    return error;
  }
}

function vig(str, key) {
  const a = 'a'.charCodeAt(0);
  const z = 'z'.charCodeAt(0);
  let cpt = 0;
  if (!isStr(str) || !isStr(key)) {
    return '';
  }
  return str.split('').map(char => {
    char = char.toLowerCase()
    char = (( char.charCodeAt(0) >= a && char.charCodeAt(0) <= z )
    ? String.fromCharCode((( char.charCodeAt(0) - a ) + ( key[cpt].charCodeAt(0) - a )) % 26 + a) : char );
    if (( char.charCodeAt(0) >= a && char.charCodeAt(0) <= z )) {
      cpt = (cpt + 1) % (key.length)
    }
    return char;
  }).join('');
}

// console.log(ucfirst(''));
// console.log(ucfirst(5));
// console.log(ucfirst('Hello World'));
// console.log(ucfirst('hello World'));

// console.log(capitalize(''));
// console.log(capitalize(5));
// console.log(capitalize('Hello World'));
// console.log(capitalize('hello World'));
// console.log(capitalize('hello world My name IS PUTIN'));

// console.log(camelCase(''));
// console.log(camelCase(5));
// console.log(camelCase('Hello World'));
// console.log(camelCase('hello World'));
// console.log(camelCase('hello world My name IS PUTIN          '));

// console.log(snakeCase(''));
// console.log(snakeCase(5));
// console.log(snakeCase('Hello World'));
// console.log(snakeCase('hello World'));
// console.log(snakeCase('hello world My name IS PUTIN          '));

// console.log(leet(''));
// console.log(leet(5));
// console.log(leet('Hello World'));
// console.log(leet('hello World'));
// console.log(leet('hello world My name IS PUTIN          '));

let prairie ={
  animal: {
    type: {
      name: 'chien'
    }
  }
};

console.log(prop_access(prairie, ''));
console.log(prop_access(prairie, 5));
console.log(prop_access(prairie, 'Hello World'));
console.log(prop_access(prairie, 'animal'));
console.log(prop_access(prairie, 'animal.type.name.test.lol'));

// console.log(verlan(''));
// console.log(verlan(5));
// console.log(verlan('Hello World'));
// console.log(verlan('animal'));
// console.log(verlan('animal.type.name.test.lol'));

// console.log(vig(''));
// console.log(vig(5));
// console.log(vig('Hello World'));
// console.log(vig('animal'));
// console.log(vig('xyz', 'abc'));
// console.log(vig('antiConstiTutioNnellement', 'foo'));
// console.log(vig(null, 'test'));



