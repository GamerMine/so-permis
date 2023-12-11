<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index(): string
    {
        return "Bonjour, je suis CodeIgniter !";
    }
}
