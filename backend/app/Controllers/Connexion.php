<?php

namespace App\Controllers;
use DB;
use Kint\Parser\ToStringPlugin;
class Connexion extends BaseController
{
    public function TestConnexion() : string 
    {

        try {
            $request = \Config\Services::request();
            $email = $request->getPost('email');
            $mp = $request->getPost('password');

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
                        redirect('/');
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
}
