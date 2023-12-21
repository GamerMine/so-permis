<?php

namespace App\Controllers;
use DB;
use Kint\Parser\ToStringPlugin;

class BDD extends BaseController
{
    public function getListeActus() : string {
        try {
            require (APPPATH . "Database/DB.inc.php");

            $db = DB::getInstance();
            $actualites = $db->getActualites();

            $retour = array();

            foreach ($actualites as $row) {
                $retour[] = array("idActu"=>$row->getIdActualite(), "titreActu"=>$row->getTitreActualite(), "infosActu"=>$row->getInfosActualite(), "imageURL"=>$row->getImageURL(), "sources"=>$row->getSources());
            }

            $json = json_encode($retour);

            if ($json === false) {
                return "Error: ".json_last_error_msg();
            } else {
                return $json;
            }

        } catch (\Throwable $th) {
            return $th;
        }
    }
}
