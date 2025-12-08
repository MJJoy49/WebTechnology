<?php

//Sum Fun
function sum($a, $b) {
    return $a + $b;
}

echo "Sum of 10 and 20 = " . sum(10, 20) . "<br>";
echo "Sum of 5 and 7 = " . sum(5, 7) . "<br>";
echo "Sum of 100 and 50 = " . sum(100, 50) . "<br><br>";



//Factorial Fun
function factorial($n) {
    if ($n == 0 || $n == 1) {
        return 1;
    }
    return $n * factorial($n - 1);
}

echo "Factorial of 5 = " . factorial(5) . "<br>";
echo "Factorial of 7 = " . factorial(7) . "<br><br>";



//Prime Check 
function is_prime($n) {

    if ($n < 2) {
        return false;
    }

    for ($i = 2; $i <= sqrt($n); $i++) {
        if ($n % $i == 0) {
            return false;
        }
    }

    return true;
}


// Test Prime Fun
$numbers = [2, 3, 4, 10, 13, 17, 20];

foreach ($numbers as $num) {
    if (is_prime($num)) {
        echo "{$num} is a prime number<br>";
    } else {
        echo "{$num} is NOT a prime number<br>";
    }
}

?>
