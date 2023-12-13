<?php

namespace App\Controllers;
use DB;
use Kint\Parser\ToStringPlugin;

class Home extends BaseController
{
    public function index(): string
    {
        return "Bonjour, je suis CodeIgniter !";
    }

    public function bado() : string 

    {
        try {
            require (APPPATH . "Database/DB.inc.php");
            $retour = ' ';
            // Exécuter le script SQL avec la méthode $this->query()
            $db = DB::getInstance();
            $actualites = $db->getActualites();
            foreach ($actualites as $row) 
            {
                $retour .= $row->getTitreActualite().' - ';
            }
            $newsletter = $db->getNewsletters();
            foreach ($newsletter as $row) 
            {
                $retour .= $row->getEmail().' - ';
            }
            $formations = $db->getFormations();
            foreach ($formations as $row) 
            {
                $retour .= $row->getNom().' - ';
            }
            $administrateurs = $db->getAdministrateurs();
            foreach ($administrateurs as $row) 
            {
                $retour .= $row->getEmail() .' - ';
            }
            return $retour;
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
