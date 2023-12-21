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

    public function bado() : string

    {
        try {
            require (APPPATH . "Database/DB.inc.php");
            $retour = array();
            // Exécuter le script SQL avec la méthode $this->query()
            $db = DB::getInstance();
            $formations = $db->getFormations();
            foreach ($formations as $row) {
                $retour[] = array("nom"=>$row->getNom(), "info"=>$row->getInfos(),"prix"=>$row->getPrix(),"type_f"=>$row->getTypeF());
            }
            return json_encode($retour);

        } catch (\Throwable $th) {
            return $th;
        }
    }
}
