<?php

//initial variables
$stringVar="joy";
var_dump($stringVar);
echo "<br>string variable = {$stringVar} <br>";


//---------
$intVar=100;
var_dump($intVar);
echo "<br> integer variable ={$intVar} <br>";

//----------
$floatVar=10.40;
var_dump($floatVar);
echo "<br> float variable ={$floatVar} <br>";

//-----------
$booleanVar=true;
var_dump($booleanVar);
echo "<br> bool variable ={$booleanVar} <br>";


function add($a,$b){
    $ans = $a + $b;
    return "your ans is {$ans} <br>";
}

function sub($a,$b){
    $ans = $a - $b;
    return "your ans is {$ans} <br>";
}


function mul($a,$b){
    $ans = $a * $b;
    return "your ans is {$ans} <br>";
}

function div($a,$b){
    $ans = $a / $b;
    return "your ans is {$ans} <br>";
}

echo add(20,30);
echo sub(30,15);
echo mul(20.6,10.5);
echo div(20,3);




?>