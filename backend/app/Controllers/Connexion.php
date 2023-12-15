<?php

namespace App\Controllers;
use DB;
use Kint\Parser\ToStringPlugin;
class Connexion extends BaseController
{
    public function TestConnexion() : string 
    {

        try {
            session_start();
            $data = $this->request->getPost();
            $email = $data['email'];
            $mp = $data['password'];
            require (APPPATH . "Database/DB.inc.php");
            $retour = ' ';
            // Exécuter le script SQL avec la méthode $this->query()
            $db = DB::getInstance();
            $administrateurs = $db->getAdministrateurs();
            $retour = "Incorrect, email et mot de passe introuvable";
            foreach ($administrateurs as $row) 
            {
                if ( $row->getEmail() == $email)
                {
                    if ($row->getPassword() == $mp)
                    {
                        $retour = "true";
                        $_SESSION['user'] = $row->getIdAdmin();
                    }
                    else
                    {
                        $retour = "Incorrect, le mot de passe ne correspond pas à l'email";
                    }
                }
            }
            return $retour;
        } catch (\Throwable $th) {
            return $th;
        }
    }
    public function TestCreation() : string 
    {

        try {
            session_start();
            return $_SESSION['user'];
            if (empty($userId)) {
                return "Vous n'êtes pas connecté. La création de compte nécessite une connexion.";
            }
            $data = $this->request->getPost();
            $email = $data['email'];
            $mp = $data['password'];
            require (APPPATH . "Database/DB.inc.php");
            $retour = 'Compte bien créé';
            // Exécuter le script SQL avec la méthode $this->query()
            $db = DB::getInstance();
            $administrateurs = $db->getAdministrateurs();
            $retour = "";
            foreach ($administrateurs as $row) 
            {
                if ( $row->getEmail() == $email)
                {

                    $retour = "Ce compte existe déjà";
                }
            }
            if ($retour == "")
            {
                $db->insertAdministrateur($email, $mp);
            }
            return $retour;
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
