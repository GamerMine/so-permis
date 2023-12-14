<?php

namespace App\Controllers;
use DB;
use Kint\Parser\ToStringPlugin;

class Forfaits extends BaseController
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
                $retour[] = array("nom"=>$row->getNom(), "info"=>$row->getInfos(),"prix"=>$row->getPrix());
            }
            return json_encode($retour,true);

        } catch (\Throwable $th) {
            return $th;
        }
    }
}
