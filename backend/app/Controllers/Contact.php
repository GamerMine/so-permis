<?php

namespace App\Controllers;

use DB;
use Kint\Parser\ToStringPlugin;

class Contact extends BaseController
{

    public function unsubscribeNewsletter()
    {
        try {
            $email = $this->request->getPost('email');
            $token = $this->request->getPost('token');
            require(APPPATH . "Database/DB.inc.php");
            $db = DB::getInstance();
            $user = $db->getNewslettersEmail($email);
            if ($user[0]->getGuid() == $token) {
                $db->deleteNewsletter($user[0]->getGuid());
                return "désinscrit";
            } else {
                return "erreur";
            }
        } catch (\Throwable $th) {
            print_r($th);
            return $th;
        }
    }

    public function subscribeNewsletter()
    {

        try {
            $email = $this->request->getPost('email');

            //return $email;
            require(APPPATH . "Database/DB.inc.php");
            $db = DB::getInstance();
            $user = $db->getNewslettersEmail($email);
            //print("user : ");

            //user est un array
            if ($user == null) {
                //envoyer mail d'inscription
                //print($email);
                //print_r(" a reçut un mail d'inscription");
                //ajouter email dans la BD
                $user = $this->insertNewsletter($email);
                //$this->insertNewsletter($email);
                print_r($user);
                $this->NewsletterMailInscription();
                return "inscritption faite";
                //

            } else {
                //pas inscrit ou pas actif
                //print_r("aaaaaaaaaaaaaaaaaaaaa");
                print_r($user);
                return "déjà inscrit";
            }
        } catch (\Throwable $th) {
            return $th;
        }
        return "test";
        //$email = $this->request->getPost('email');
        //print_r($email);
        //return $email + " inscrit";
    }

    public function insertNewsletter($email)
    {
        try {
            //print_r("test bd");
            //require(APPPATH . "Database/DB.inc.php");
            $db = DB::getInstance();
            $db->insertNewsletter($email);
            //print_r("insertion dans la BD");
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function NewsletterMailInscription()
    {


        //Librairie Email
        $email = \Config\Services::email();
        // Paramètres de l'e-mail
        $to = $this->request->getPost('email');
        $LienMailConfirmation = $this->genererLienConfirmation($to);
        $from = 'malo.rihet@gmail.com';
        $subject = "Confirmation d\'inscription à la newsletter So-Permis";
        $message =  'Bonjour, <br> <br> Vous avez été inscrit à la newsletter de l\'association. <br> <br> Cordialement, <br> <br> Malo Rihet';
        $mail = "<!DOCTYPE html>
        <html lang=\"fr\">
        <head>
            <meta charset=\"UTF-8\">
            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
            <title>Confirmation d'inscription à la newsletter So-Permis</title>
        </head>
        <body>
        
        <p>Cher(e) client(e),</p>
        
        <p>Nous sommes enchantés de vous accueillir parmi les abonnés de la newsletter So-Permis. Votre intérêt pour nos actualités, promotions et informations exclusives nous réjouit.</p>
        
        <p>Veuillez <a href=" . $LienMailConfirmation . ">cliquer ici</a> pour confirmer votre inscription.</p>
        
        <p>En vous inscrivant à notre newsletter, vous resterez informé(e) des dernières actualités, des offres spéciales et des événements à venir. Nous nous engageons à vous fournir des contenus pertinents et captivants.</p>
        
        <p>Si vous n'avez pas initié cette inscription, veuillez ignorer ce message.</p>
        
        <p>Assurez-vous de vérifier votre dossier de courrier indésirable au cas où notre e-mail serait dirigé accidentellement vers ce dossier.</p>
        
        <p>Nous sommes impatients de partager avec vous les dernières informations passionnantes de So-Permis. Merci de faire partie de notre communauté.</p>
        
        <p>Cordialement,<br>
        L'équipe So-Permis</p>
        
        <!-- Coordonnées de contact -->
        <p>So-Permis<br>
        02 78 34 10 63<br>
        20 Rue Jean Lurçat,<br>
        76610 Le Havre<br>
        <a href=\"http://localhost:3000\">Site Web</a><br>
        <a href=\"\">Snapchat</a><br>
        <a href=\"\">Instagram</a></p>
        
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
            echo 'Échec de l\'envoi de l\'e-mail. Erreur : ';
        }
    }

    function chargerToken($emailUtilisateur): string
    {
        try {
            //$user = $db->getNewsletters();
            // Génération d'un jeton unique
            $id_unique = md5(uniqid(rand(), true));
            //changer le tocken dans la BD pour l'utilisateur
            //require(APPPATH . "Database/DB.inc.php");
            $db = DB::getInstance();
            $db->updatetoken($id_unique, $emailUtilisateur);
            print_r("token : ");
            print_r($id_unique);
            return $id_unique;
        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }

    function genererLienConfirmation($emailUtilisateur)
    {
        $token = $this->chargerToken($emailUtilisateur);
        print_r("token : ");
        print_r($token);
        print_r("email : ");
        print_r($emailUtilisateur);

        //enregistrer le jeton dans la base de données

        // Construction du lien de confirmation avec le jeton
        $lienConfirmation = "http://localhost:3000/confirmation?token=$token&email=$emailUtilisateur";
        print_r("lien : ");
        print_r($lienConfirmation);

        return $lienConfirmation;
    }

    function ContactMail()
    {
        //Librairie Email
        $email = \Config\Services::email();
        // Paramètres de l'e-mail
        $to = 'malo.rihet@gmail.com';
        $from = $this->request->getPost('from');
        $subject = $this->request->getPost('subject');
        $message =  $this->request->getPost('message');
        $nom = $this->request->getPost('nom');
        $prenom = $this->request->getPost('prenom');
        $number = $this->request->getPost('number');

        //rajouter une signature au mail
        $sign = '<br>
                 <p> Cordialement, </p>
                    <p> ' . $nom . ' ' . $prenom . ' </p>
                    <p> ' . $number . ' </p>
                    <p> ' . $from . ' </p>
                <br>';


        $message = $message . $sign;

        // Préparation de l'e-mail
        $email->setTo($to);
        $email->setFrom($from);
        $email->setSubject($subject);
        $email->setMessage($message);
        $email->setMailType('html');
        // Envoyer l'e-mail
        if ($email->send()) {
            echo 'E-mail envoyé avec succès.';
        } else {
            echo 'Échec de l\'envoi de l\'e-mail. Erreur : ' . $email->printDebugger(['headers']);
        }
    }

    function Confirmation()
    {
        print_r("test");
        $token = $this->request->getPost('token');
        $email = $this->request->getPost('email');
        print_r($token);
        print_r($email);
        print_r("try\n");
        try {
            print_r("tryyyy\n");

            //$this->tokenVerification($token, $email);
            require(APPPATH . "Database/DB.inc.php");
            $db = DB::getInstance();
            $user = $db->getNewslettersEmail($email);
            print_r($user);
            $token = $user[0]->getGuid();
            print_r("user avant \n");
            $this->updateActif($token);
        } catch (\Throwable $th) {
            print_r($th);
            return $th->getMessage();

            //throw $th;
        }
        return;

        /*
        if ($this->tokenVerification($token, $email)) {
            print_r("vérified");
            print_r($token);
            print_r("\n");
            print_r($email);
            $this->updateActif($token);
            print_r("okkkkkkkkkkkkkk");
            return True;
        } else {
            print_r("aled");
            return False;
        }
        */
    }

    function tokenVerification($token, $email)
    {
        print_r("\nfunction tokenverification\n");
        print_r($token);
        print_r("\n");
        print_r($email);

        try {
            print_r("test token verification\n");
            return True;
            //require(APPPATH . "Database/DB.inc.php");
            $db = DB::getInstance();
            $user = $db->getNewslettersEmail($email);
            print_r($user);
            if ($user['token'] == $token) {
                print_r("token vérifié");
                print_r($token);
                return True;
            } else {
                print_r("token non vérifié");
                return False;
            }
        } catch (\Throwable $th) {
            //throw $th;
            return $th->getMessage();
        }
    }

    function updateActif($token)
    {
        try {
            //require(APPPATH . "Database/DB.inc.php");
            $db = DB::getInstance();
            $db->updateActif($token);
            print_r("update actif");
        } catch (\Throwable $th) {
            //throw $th;
            print_r("erreur update actif");
            print_r($th->getMessage());
            return $th->getMessage();
        }
    }

    //envoyer un article a tus les utilisateurs actifs
    public function sendArticle($titre, $infos, $sources)
    {
        print_r($titre);
        try {
            //require(APPPATH . "Database/DB.inc.php");
            $db = DB::getInstance();
            $users = $db->getNewslettersActif();
            return $users;
            /*foreach ($users as $user) {
                print_r($user);
                $this->sendArticleToUser($user);
            }*/
            // return la liste des users
        } catch (\Throwable $th) {
            //throw $th;
            print_r($th->getMessage());
            return $th->getMessage();
        }
    }
    /*
    function sendArticleToUser($user)
    {
        //Librairie Email
        $email = \Config\Services::email();
        // Paramètres de l'e-mail
        $to = $user->getEmail();
        $from = 'malo.rihet@gmail.com';
        $token = $user->getGuid();
        $subject = "Newletter So-Permis";
        $mail = "<!DOCTYPE html>
        <html lang=\"fr\">
        <head>
            <meta charset=\"UTF-8\">
            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
            <title>Newsletter So-Permis</title>
        </head>
        <body>

        <!-- Coordonnées de contact -->
        <p>So-Permis<br>
        02 78 34 10 63<br>
        20 Rue Jean Lurçat,<br>
        76610 Le Havre<br>
        <a href=\"http://localhost:3000\">Site Web</a><br>
        <a href=\"\">Snapchat</a><br>
        <a href=\"\">Instagram</a></p>
        
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
            echo 'Échec de l\'envoi de l\'e-mail. Erreur : ';
        }
    }
    */
}
