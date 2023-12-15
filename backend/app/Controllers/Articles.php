<?php

namespace App\Controllers;
use DB;
use Kint\Parser\ToStringPlugin;

class Articles extends BaseController
{
    public function getArticles() : string
    {
        try {
            require (APPPATH . "Database/DB.inc.php");
            $retour = ' ';
            // Exécuter le script SQL avec la méthode $this->query()
            $db = DB::getInstance();
            $retour = array();
            $articles = $db->getActualites();
            foreach ($articles as $row) 
            {
                array_push($retour, $row);
            }
            return json_encode($retour);

        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }
}