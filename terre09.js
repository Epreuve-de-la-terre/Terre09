#! node

const num = process.argv[2];
const exp = process.argv[3];
const chi = num - exp;

if (isNaN(chi)) {
  console.log("Veuillez indiquer deux chiffres en argument");
} else if (num < 0 || exp < 0) {
  console.log("Veuillez indiquer un chiffre positif");
} else {
  console.log(num ** exp);
}
