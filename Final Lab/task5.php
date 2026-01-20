<?php

class Book {

    public $title;
    public $author;
    public $year;

    // Cons
    public function __construct($title, $author, $year) {
        $this->title  = $title;
        $this->author = $author;
        $this->year   = $year;
    }

    //get 
    public function getDetails() {
        return "Title: {$this->title}, Author: {$this->author}, Year: {$this->year}<br>";
    }

    // Setter 
    public function setTitle($title) {
        $this->title = $title;
    }

    public function setAuthor($author) {
        $this->author = $author;
    }

    public function setYear($year) {
        $this->year = $year;
    }
}





// Create obj
$book1 = new Book("The Alchemist", "Paulo Coelho", 1988);

// Display book details
echo $book1->getDetails();


$book1->setTitle("Rich Dad Poor Dad");
$book1->setAuthor("Robert Kiyosaki");
$book1->setYear(1997);

// Display updated.....
echo $book1->getDetails();

?>
