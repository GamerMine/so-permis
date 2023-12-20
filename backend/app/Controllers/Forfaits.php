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
            foreach ($formations as $row) {
                $retour[] = array("id"=>$row->getIdFormation(),"prix"=>$row->getPrix(), "nom"=>$row->getNom(),"infos"=>$row->getInfos(), "type_f"=>$row->getTypeF());

            }
            return json_encode($retour);

        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }

    public function AjouterFormations()
    {
        try {
            require (APPPATH . "Database/DB.inc.php");

            $db = DB::getInstance();
            $nom = $this->request->getPost('nom');
            $prix = $this->request->getPost('prix');
            $infos = $this->request->getPost('infos');
            $type_f= $this->request->getPost('type_f');

            $db->insertFormation($prix, $nom, $infos, $type_f);
            return json_encode(["success" => "Formations ajouté"]);

        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }

    public function DeleteFormations()
    {
        try {
            require (APPPATH . "Database/DB.inc.php");

            $db = DB::getInstance();
            $id = $this->request->getPost('idFormation');

            $db->deleteFormation($id);
            return json_encode(["success" => "Formation supprimé"]);

        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }

    public function ModifierFormation($id){
        try {
            require(APPPATH . "Database/DB.inc.php");

            $db = DB::getInstance();

            // Récupérer les détails de l'article spécifique en fonction de l'ID
            $formation = $db->getFormation($id);
            $retour = array();

            $retour = [
                'idformation' => $formation[0]->getIdFormation(),
                'prix' => $formation[0]->getPrix(),
                'nom' => $formation[0]->getNom(),
                'infos' => $formation[0]->getInfos(),
                'type_f' => $formation[0]->getTypeF()
            ];
        return json_encode($retour);

    } catch (\Throwable $th) {
        return json_encode(["error" => $th->getMessage()]);
    }
}

    public function UpdateFormation(){
        try {
            require (APPPATH . "Database/DB.inc.php");

            $db = DB::getInstance();
            $id = $this->request->getPost('id');
            $prix = $this->request->getPost('prix');
            $nom = $this->request->getPost('nom');
            $infos = $this->request->getPost('infos');
            $type_f= $this->request->getPost('type_f');

            echo $type_f;


            $db->updateFormation($id, $prix,$nom, $infos, $type_f);

            return json_encode(["success" => "Formation modifié"]);

        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }
}
