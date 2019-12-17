function isStr(str) {
  try {
    if (typeof str !== "string") {
      throw "The variable sent is not a string";
    }
    if (str.length === 0) {
      throw "The string sent is empty";
    }
    return Promise.resolve(str);
  } catch (error) {
    return Promise.reject(error);
  }
}

function ucfirst(str) {
  return isStr(str)
    .then(str => {
      return Promise.resolve(str[0].toUpperCase() + str.substring(1));
    })
    .catch(error => {
      console.log("ucfirst error");
      console.log(error);
      return "";
      // return Promise.reject(error)
    });
}

function capitalize(str) {
  return isStr(str)
    .then(str => {
      return Promise.resolve(
        str
          .toLowerCase()
          .split("")
          .map(function(item) {
            return ucfirst(item);
          })
          .join(" ")
      );
    })
    .catch(error => {
      console.log("capitalize error");
      console.log(error);
      return "";
      // return Promise.reject(error)
    });
}

// console.log(ucfirst(''));
// console.log(ucfirst(5));
// console.log(ucfirst('Hello World'));
// console.log(ucfirst('hello World'));

// console.log(capitalize(''));
// console.log(capitalize(5));
// console.log(capitalize('Hello World'));
console.log(capitalize("hello World"));
console.log(capitalize("hello world My name IS PUTIN"));
