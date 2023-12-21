<?php

namespace App\Controllers;

class MailContact extends BaseController
{
    public function index()
    {
        //Librairie Email
        $email = \Config\Services::email();
        // Paramètres de l'e-mail
        $to = "malo.rihet@gmail.com";
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
