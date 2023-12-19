<?php

namespace App\Controllers;

use DB;
use Kint\Parser\ToStringPlugin;

class Newsletter extends BaseController
{

    public function GetNewsletter(): string
    {
        try {
            require(APPPATH . "Database/DB.inc.php");
            $retour = ' ';
            // Exécuter le script SQL avec la méthode $this->query()
            $db = DB::getInstance();
            $retour = array();
            $newsletter = $db->getNewsletters();
            foreach ($newsletter as $row) {
                array_push($retour, $row->getEmail());
            }
            return json_encode($retour);
        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }

    public function DeleteNewsletter(): string
    {
        try {
            $data = $this->request->getPost();
            $email = $data['email'];
            require(APPPATH . "Database/DB.inc.php");
            $retour = 'ca a bien marché - ';
            // Exécuter le script SQL avec la méthode $this->query()
            $db = DB::getInstance();
            $id = -1;
            $news = $db->getNewsletters();
            foreach ($news as $new) {
                $retour = $retour . $new->getEmail() . ' - ';
                if ($new->getEmail() == $email) {
                    $id = $new->getIdNewsletter();
                }
            }
            $db->deleteNewsletter($id);
            return json_encode($retour);
        } catch (\Throwable $th) {
            return json_encode(["error" => $th->getMessage()]);
        }
    }
}
