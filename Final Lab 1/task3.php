<?php

echo "For Loop Output:<br>";

for ($i = 1; $i <= 20; $i++) {

    echo $i . "<br>";

    if ($i == 5) {
        break;   
    }
}


echo "<br>While Loop Output (Even Numbers):<br>";

$x = 1;

while ($x <= 20) {

    if ($x % 2 == 0) {
        echo $x . "<br>";
    }

    $x++;
}




echo "<br>Fruits and Their Colors:<br>";

$fruits = [
    "apple" => "red",
    "banana" => "yellow",
    "grape" => "purple",
    "orange" => "orange",
    "mango" => "green"
];

foreach ($fruits as $name => $color) {
    echo "The color of {$name} is {$color}<br>";
}

?>
