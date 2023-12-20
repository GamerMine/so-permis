<?php

namespace App\Controllers;
use DB;
use Kint\Parser\ToStringPlugin;

class ForfaitsCode extends BaseController
{
    public function getForfaitsCode() : string
    {
        try {
            require (APPPATH . "Database/DB.inc.php");
            // Exécuter le script SQL avec la méthode $this->query()
            $db = DB::getInstance();
            $retour = array();
            $formations = $db->getFormations();
            foreach ($formations as $row) {    
                if($row->getTypeF() == 'code')
                {
                    $retour[] = array("id"=>$row->getIdFormation(),"prix"=>$row->getPrix(), "nom"=>$row->getNom(),"infos"=>$row->getInfos(),"type_f"=>$row->getTypeF()); 
                }     
            }
            return json_encode($retour);

        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }

    public function getForfaitsAnnulation() : string
    {
        try {
            require (APPPATH . "Database/DB.inc.php");
            // Exécuter le script SQL avec la méthode $this->query()
            $db = DB::getInstance();
            $retour = array();
            $formations = $db->getFormations();
            foreach ($formations as $row) {    
                if($row->getTypeF() == 'annulation')
                {
                    $retour[] = array("id"=>$row->getIdFormation(),"prix"=>$row->getPrix(), "nom"=>$row->getNom(),"infos"=>$row->getInfos(),"type_f"=>$row->getTypeF()); 
                }     
            }
            return json_encode($retour);

        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }
}
