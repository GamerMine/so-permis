<?php

namespace App\Controllers;
use DB;
use Kint\Parser\ToStringPlugin;

class ListePermis extends BaseController
{
    public function index(): string
    {
        return "Bonjour, je suis CodeIgniter !";
    }

    public function bado() : array

    {
        try {
            require (APPPATH . "Database/DB.inc.php");
            $retour = array('ee','122','err');
            // Exécuter le script SQL avec la méthode $this->query()
            $db = DB::getInstance();
            $formations = $db->getFormations();
            foreach ($formations as $row) {
                $retour[] = array($row->getNom(), $row->getInfos(),$row->getPrix());
            }
            return $retour;

        } catch (\Throwable $th) {
            return $th;
        }
    }
}
