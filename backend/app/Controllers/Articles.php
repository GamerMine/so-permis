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
                $retour[] = [
                    'id' => $row->getIdActualite(),
                    'titreActualite' => $row->getTitreActualite(),
                    'infosActualite' => $row->getInfosActualite(),
                    'imageURL' => $row->getImageURL(),
                    'sources' => $row->getSources()
                ];
            }
            return json_encode($retour);

        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }

    public function AjouterArticle()
    {
        try {
            require (APPPATH . "Database/DB.inc.php");
            
            $db = DB::getInstance();
            $titre = $this->request->getPost('titre');
            $infos = $this->request->getPost('infos');
            $image = $this->request->getPost('image');
            $sources = $this->request->getPost('sources');

            $db->insertActualite($titre,$infos, $image, $sources);
            return json_encode(["success" => "Article ajouté"]);

            

        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }
}