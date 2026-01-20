<?php


$temperature = 22;   

if (!is_numeric($temperature)) {
    echo "Invalid temperature value!<br>";
    exit;
}

echo "Temperature: {$temperature}°C<br>";

if ($temperature < 10) {
    echo "It's cold<br>";
} elseif ($temperature >= 10 && $temperature <= 25) {
    echo "It's warm<br>";
} else {
    echo "It's hot<br>";
}




$day = 3;  

if (!is_numeric($day) || $day < 1 || $day > 7) {
    echo "Invalid day number! Must be 1-7.<br>";
    exit;
}

echo "Day Number: {$day}<br>";


switch ($day) {
    case 1:
        echo "Monday";
        break;
    case 2:
        echo "Tuesday";
        break;
    case 3:
        echo "Wednesday";
        break;
    case 4:
        echo "Thursday";
        break;
    case 5:
        echo "Friday";
        break;
    case 6:
        echo "Saturday";
        break;
    case 7:
        echo "Sunday";
        break;
}

?>
