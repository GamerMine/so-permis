<?php

namespace App\Controllers;
use DB;
use Kint\Parser\ToStringPlugin;

class Forfaits extends BaseController
{
    public function getFormations() : string
    {
        try {
            require (APPPATH . "Database/DB.inc.php");
            // Exécuter le script SQL avec la méthode $this->query()
            $db = DB::getInstance();
            $retour = array();
            $formations = $db->getFormations();
            foreach ($formations as $row) 
            {
                $retour[] = array("id"=>$row->getIdFormation(),"prix"=>$row->getPrix(), "nom"=>$row->getNom(),"infos"=>$row->getInfos());
            }
            return json_encode($retour);

        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }
}
