<?php

namespace App\Controllers;

use DB;
use Kint\Parser\ToStringPlugin;

class Contact extends BaseController
{

    public function unsubscribeNewsletter(): string
    {
        $email = $this->request->getPost('email');
        print_r($email);
        return $email + " désinscrit";
    }

    public function subscribeNewsletter(): string
    {

        try {
            $email = $this->request->getPost('email');
            $this->NewsletterMailInscription();
            //return $email;
            require(APPPATH . "Database/DB.inc.php");
            $db = DB::getInstance();
            //$user = $db->getNewsletters();
            $user = $db->getNewslettersEmail($email);
            print("user : ");

            //user est un array
            if ($user == null) {
                //envoyer mail d'inscription
                print($email);
                print(" a reçut un mail d'inscription");
                print_r($user);
                return $email;
                //

            } else {
                //pas inscrit ou pas actif
                print_r("aaaaaaaaaaaaaaaaaaaaa");
                return $email;
            }
        } catch (\Throwable $th) {
            return $th;
        }
        return "test";
        //$email = $this->request->getPost('email');
        //print_r($email);
        //return $email + " inscrit";
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
            echo 'Échec de l\'envoi de l\'e-mail. Erreur : ' . $email->printDebugger(['headers']);
        }
    }

    function genererLienConfirmation($emailUtilisateur)
    {
        // Génération d'un jeton unique
        $jeton = bin2hex(random_bytes(15));
        //enregistrer le jeton dans la base de données

        // Construction du lien de confirmation avec le jeton
        $lienConfirmation = "http://localhost:3000/confirmation?token=$jeton&email=$emailUtilisateur";

        return $lienConfirmation;
    }

    public function ContactMail()
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
}
