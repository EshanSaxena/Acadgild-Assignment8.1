/*JS code to write function isPrime that accepts parameter and check
whether given number is prime or not and return tru or false. */

function isPrime(n) {
    var flag = 0;
    for (var i = 1; i <= n; i++) {
        if (n % i == 0) {
            ++flag;
        }
    }
    if (flag > 2) {
        return false;
    } else {
        return true;
    }

}

console.log(isPrime(98));
console.log(isPrime(97));