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
            return $email;

            require(APPPATH . "Database/DB.inc.php");
            $db = DB::getInstance();
            //$user = $db->getNewsletterEmail($email);
            //user est un array
            if ($user == null) {
                //envoyer mail d'inscription
                print_r($email + " a reçut un mail d'inscription");
                return $email + " a reçut un mail d'inscription";
            } else {
                //pas inscrit ou pas actif
                print_r($user);
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
        $from = 'malo.rihet@gmail.com';
        $subject = 'Inscription à la newsletter';
        $message =  'Bonjour, <br> <br> Vous avez été inscrit à la newsletter de l\'association. <br> <br> Cordialement, <br> <br> Malo Rihet';
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
