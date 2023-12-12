<?php

namespace App\Controllers;
use DB;
use Kint\Parser\ToStringPlugin;

class Home extends BaseController
{
    public function index(): string
    {
        return "Bonjour, je suis CodeIgniter !";
    }

    public function bado() : string 
    {
        try {
            require (APPPATH . "Database/DB.inc.php");
            // Exécuter le script SQL avec la méthode $this->query()
            $db = DB::getInstance();
            $actualites = $db->getActualites();
            foreach ($actualites as $row) {
                return $row[1];
            }
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
