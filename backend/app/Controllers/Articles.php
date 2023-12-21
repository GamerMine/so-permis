<?php

namespace App\Controllers;

use DB;
use Kint\Parser\ToStringPlugin;
use CodeIgniter\HTTP\IncomingRequest;



class Articles extends BaseController
{
    public function getArticles(): string
    {
        try {
            require(APPPATH . "Database/DB.inc.php");
            $retour = ' ';
            // Exécuter le script SQL avec la méthode $this->query()
            $db = DB::getInstance();
            $retour = array();
            $articles = $db->getActualites();
            foreach ($articles as $row) {
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
            require(APPPATH . "Database/DB.inc.php");
            $db = DB::getInstance();
            $titre = $this->request->getPost('titreActualite');
            $infos = $this->request->getPost('infosActualite');
            $sources = $this->request->getPost('sources');
            $file = $this->request->getFile('file');
            $newsletters = $this->request->getPost('newsletter');
            if ($newsletters) {;
                $this->sendArticle($titre, $infos, $sources);
            }
            $image = 'null';
            $uploadPath = FCPATH . 'public/images/';

            if (!is_dir($uploadPath)) {
                mkdir($uploadPath, 0777, true);
            }

            if ($file != null) {
                $file->move($uploadPath, $file->getName());
                $image = $file->getName();
            }

            $db->insertActualite($titre, $infos, $image, $sources);
            return json_encode(["success" => "Article ajouté"]);
        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }

    public function DeleteArticle()
    {
        try {
            require(APPPATH . "Database/DB.inc.php");

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
            require(APPPATH . "Database/DB.inc.php");

            $db = DB::getInstance();
            $id = $this->request->getPost('id');
            $titre = $this->request->getPost('titreActualite');
            $infos = $this->request->getPost('infosActualite');
            $sources = $this->request->getPost('sources');
            $file = $this->request->getFile('file');
            print_r($titre);
            $image = 'null';
            $uploadPath = FCPATH . 'public/images/';

            // Vérifier si le dossier de destination existe, sinon le créer
            if (!is_dir($uploadPath)) {
                mkdir($uploadPath, 0777, true);
            }
            if ($file != null) {
                // Déplacer le fichier vers le dossier de destination
                $file->move($uploadPath, $file->getName());
                $image = $file->getName();
            }

            $db->updateActualite($id, $titre, $infos, $image, $sources);

            return json_encode(["success" => "Article modifié"]);
        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }

    public function sendArticle($titre, $infos, $sources)
    {
        print_r($titre);
        try {
            //require(APPPATH . "Database/DB.inc.php");
            $db = DB::getInstance();
            $users = $db->getNewslettersActif();
            print_r($users);
            foreach ($users as $user) {
                print_r($user);
                $this->sendArticleToUser($user, $titre, $infos, $sources);
            }
            // return la liste des users
        } catch (\Throwable $th) {
            //throw $th;
            print_r($th->getMessage());
            return $th->getMessage();
        }
    }

    function sendArticleToUser($user, $titre, $infos, $sources)
    {
        $email = \Config\Services::email();

        $to = $user->getEmail();
        $from = 'malo.rihet@gmail.com';
        $token = $user->getGuid();
        $subject = "Newletter So-Permis";
        $unsubscribeLink = "http://localhost:3000/unsubscribe?token=$token&email=$to";
        $mail = "<!DOCTYPE html>
        <html lang=\"fr\">
        <head>
            <meta charset=\"UTF-8\">
            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
            <title>Newsletter So-Permis</title>
        </head>
        <body>
        <h1>Newsletter So-Permis</h1>
        <h2>$titre</h2>
        <p>$infos</p>
        <p>Sources : $sources</p>
        
        <!-- Coordonnées de contact -->
        <p>So-Permis<br>
        02 78 34 10 63<br>
        20 Rue Jean Lurçat,<br>
        76610 Le Havre<br>
        <a href=\"#\">Site Web</a><br>
        <a href=\"#\">Snapchat</a><br>

        Se désinscrire : <a href=\"$unsubscribeLink\">Désinscription</a>
        
        </body>
        </html>
        ";
        // Préparation de l'e-mail
        $email->setTo($to);
        $email->setFrom($from);
        $email->setSubject($subject);
        $email->setMessage($mail);
        $email->setMailType('html');
        // Envoyer l'e-mail
        if ($email->send()) {
            echo 'E-mail envoyé avec succès.';
        } else {
            echo 'Échec de l\'envoi de l\'e-mail. Erreur : ' . $email->printDebugger();
        }
    }
}
