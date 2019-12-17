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
 ** check if the variable respect the type sent
 *
 * @param {*} variable
 * @param {*} type
 * @returns
 */
function type_check_v1(variable, type) {
  try {
    if(!isStr(type)){
      return false;
    }
    switch (type.toLowerCase()) {
      case 'number':
        if (type.toLowerCase() === (typeof variable).toLowerCase()) {
          return true;
        }
        break;
      case 'string':
        if (type.toLowerCase() === (typeof variable).toLowerCase()) {
          return true;
        }
        break;
      case 'boolean':
        if (type.toLowerCase() === (typeof variable).toLowerCase()) {
          return true;
        }
        break;
      case 'undefined':
        if (type.toLowerCase() === (typeof variable).toLowerCase()) {
          return true;
        }
        break;
      case 'object':
        if (type.toLowerCase() === (typeof variable).toLowerCase()) {
          return true;
        }
        break;
      case 'null':
        if (variable === null) {
          return true;
        }
        break;
      case 'array':
        if ((typeof variable).toLowerCase() === 'object' && Array.isArray(variable)) {
          return true;
        }
        break;
      case 'function':
        if (type.toLowerCase() === (typeof variable).toLowerCase()) {
          return true;
        }
        break;
      default:
        return false;
    }
    return false;
  } catch (error) {
    console.log('type_check_v1 error');
    console.log(error);
    return error;
  }
}

/**
 ** check if the variable respect the conf sent
 *
 * @param {*} variable
 * @param {*} conf
 * @returns
 */
function type_check_v2(variable, conf) {
  try {
    //
  } catch (error) {
    console.log('type_check_v2 error');
    console.log(error);
    return error;
  }
}

/**
 ** check if the variable(obj) respect the conf sent
 *
 * @param {*} variable
 * @param {*} conf
 * @returns
 */
function type_check(variable, conf) {
  try {
    //
  } catch (error) {
    console.log('type_check error');
    console.log(error);
    return error;
  }
}

let v1 = 1;
let v2 = 'ok';
let v3 = true;
let v4;
let v5 = {};
let v6 = null;
let v7 = [];
let v8 = function(a , b) {
  return a + b
};

// console.log('type de la variable v1', typeof v1);
// console.log('type de la variable v2', typeof v2);
// console.log('type de la variable v3', typeof v3);
// console.log('type de la variable v4', typeof v4);
// console.log('type de la variable v5', typeof v5);
// console.log('type de la variable v6', typeof v6);
// console.log('type de la variable v7', typeof v7);
// console.log('type de la variable v8', typeof v8);

console.log(type_check_v1(v1,'number'));
console.log(type_check_v1(v2,'string'));
console.log(type_check_v1(v3,'boolean'));
console.log(type_check_v1(v4,'undefined'));
console.log(type_check_v1(v5,'object'));
console.log(type_check_v1(v6,'null'));
console.log(type_check_v1(v7,'array'));
console.log(type_check_v1(v8,'function'));
console.log(type_check_v1(v8,''));
console.log(type_check_v1(v8,'number'));
console.log(type_check_v1(v8, null));













