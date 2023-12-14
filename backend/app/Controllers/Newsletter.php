<?php

namespace App\Controllers;
use DB;
use Kint\Parser\ToStringPlugin;

class Newsletter extends BaseController
{

    public function GetNewsletter() : string 
    {
        try {
            require (APPPATH . "Database/DB.inc.php");
            $retour = ' ';
            // Exécuter le script SQL avec la méthode $this->query()
            $db = DB::getInstance();
            $retour = array();
            $newsletter = $db->getNewsletters();
            foreach ($newsletter as $row) 
            {
                array_push( $retour, $row->getEmail());
            }
            return json_encode($retour);
        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }
}
