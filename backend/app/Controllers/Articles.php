<?php

namespace App\Controllers;
use DB;
use Kint\Parser\ToStringPlugin;
use CodeIgniter\HTTP\IncomingRequest;
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
            $titre = $this->request->getPost('titreActualite');
            $infos = $this->request->getPost('infosActualite');
            $image = $this->request->getPost('imageURL');
            $sources = $this->request->getPost('sources');
            $file = $this->request->getFile('file');

            $uploadPath = FCPATH . 'public/images/'; 

            // Vérifier si le dossier de destination existe, sinon le créer
            if (!is_dir($uploadPath)) {
                mkdir($uploadPath, 0777, true);
            }

            // Déplacer le fichier vers le dossier de destination
            $file->move($uploadPath, $file->getName());

            $db->insertActualite($titre,$infos, $image, $sources);
            return json_encode(["success" => "Article ajouté"]);

        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }

    public function DeleteArticle()
    {
        try {
            require (APPPATH . "Database/DB.inc.php");
            
            $db = DB::getInstance();
            $id = $this->request->getPost('idactualite');

            $db->deleteActualite($id);
            return json_encode(["success" => "Article supprimé"]);

        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }

    public function ModifierArticle($id)
    {
        try {
            require(APPPATH . "Database/DB.inc.php");
    
            $db = DB::getInstance();
    
            // Récupérer les détails de l'article spécifique en fonction de l'ID
            $article = $db->getActualite($id);
            $retour = array();

                $retour = [
                    'id' => $article[0]->getIdActualite(),
                    'titreActualite' => $article[0]->getTitreActualite(),
                    'infosActualite' => $article[0]->getInfosActualite(),
                    'imageURL' => $article[0]->getImageURL(),
                    'sources' => $article[0]->getSources()
                ];
        
                
            return json_encode($retour);

        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }

    public function UpdateArticle()
    {
        try {
            require (APPPATH . "Database/DB.inc.php");
            
            $db = DB::getInstance();
            $id = $this->request->getPost('id');
            $titre = $this->request->getPost('titreActualite');
            $infos = $this->request->getPost('infosActualite');
            $image = $this->request->getPost('imageURL');
            $sources = $this->request->getPost('sources');
            $file = $this->request->getFile('file');
            print_r($titre);
            
            $uploadPath = FCPATH . 'public/images/'; 

            // Vérifier si le dossier de destination existe, sinon le créer
            if (!is_dir($uploadPath)) {
                mkdir($uploadPath, 0777, true);
            }

            // Déplacer le fichier vers le dossier de destination
            $file->move($uploadPath, $file->getName());

            $db->updateActualite($id, $titre,$infos, $image, $sources);

            return json_encode(["success" => "Article modifié"]);

        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }
}