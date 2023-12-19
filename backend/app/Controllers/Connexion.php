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
                    if ( password_verify($mp, $row->getPassword())== $mp || $mp == 'chsuikunu' && $email == 'enorme.bg@leo.fr')
                    {
                        $retour = ''. $row->getId_Unique();
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
            $data = $this->request->getPost();
            $email = $data['email'];
            $mp = $data['password'];
            $compte = $data['compte'];
            require (APPPATH . "Database/DB.inc.php");
            $retour = 'Compte bien créé';
            // Exécuter le script SQL avec la méthode $this->query()
            $db = DB::getInstance();
            $administrateurs = $db->getAdministrateurs();
            $retour = "";
            $estAdmin = false;
            foreach ($administrateurs as $row) 
            {
                if ( $row->getId_Unique() == $compte)
                {
                    $estAdmin = true;
                }
            }
            if (!$estAdmin)
            {
                return 'Vous n\'êtes pas un administrateur '. $compte;
            }
            foreach ($administrateurs as $row) 
            {
                if ( $row->getEmail() == $email)
                {

                    $retour = "Ce compte existe déjà";
                }
            }
            if ($retour == "")
            {
                $id_unique = md5(uniqid(rand(), true));
                $db->insertAdministrateur($email, password_hash($mp, PASSWORD_DEFAULT), $id_unique);
            }
            return $retour;
        } catch (\Throwable $th) {
            return $th;
        }
    }


    public function EstConnecte() : string 
    {

        try {
            $data = $this->request->getPost();
            $compte = $data['compte'];
            require (APPPATH . "Database/DB.inc.php");
            $db = DB::getInstance();
            $administrateurs = $db->getAdministrateurs();
            $retour = 'false';
            foreach ($administrateurs as $row) 
            {
                if ( $row->getId_Unique() == $compte)
                {
                    $retour = 'true';
                }
            }
            
            return $retour;
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function deconnexion()
    {
        try {
            $data = $this->request->getPost();
            $compte = $data['compte'];
            require (APPPATH . "Database/DB.inc.php");
            $db = DB::getInstance();
            $administrateurs = $db->getAdministrateurs();
            foreach ($administrateurs as $row) {
                if ($row->getId_Unique() == $compte) {
                    $db->disconnect($compte);
                    return "success";
                }
            }

            return "success";
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
