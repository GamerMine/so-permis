<?php
/*classe permettant de representer les tuples de la table client */
class ADMINISTRATEUR {
      /*avec PDO, il faut que les noms attributs soient les m�mes que ceux de la table*/
      private $idadmin;
      private $email;
      private $password;
      private $id_unique;

      /* Les m�thodes qui commencent par __ sont des methodes magiques */
      /* Elles sont appel�es automatiquement par php suite � certains �v�nements. */
      /* Ici c'est l'appel � new sur la classe qui d�clenche l'ex�cution de la m�thode */
      /* des valeurs par d�faut doivent �tre sp�cifi�es pour les param�tres du constructeur sinon
      	 il y aura une erreur lorsqu'il sera appel� automatiquement par PDO 
       */    
      
      public function __construct($i=-1,$e="",$p="", $u="") {
         $this->idadmin = $i;
         $this->email = $e;
         $this->password = $p;
         $this->id_unique = $u;
      }

      public function getIdAdmin () {return $this->idadmin; }
      public function getEmail() { return $this->email; }
      public function getPassword() { return $this->password;}
      public function getId_Unique() { return $this->id_unique;}

      public function __toString() {
        return '';     
      }
}

//test
//$unclient = new Client(5,'Dupont','Le Havre');
//echo $unclient;
?>
