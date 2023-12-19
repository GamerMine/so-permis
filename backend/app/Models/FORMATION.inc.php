<?php
/*classe permettant de representer les tuples de la table client */
class FORMATION {
      /*avec PDO, il faut que les noms attributs soient les m�mes que ceux de la table*/
      private $idformation;
      private $prix;
      private $nom;
      private $infos;
      private $type_f;

      /* Les m�thodes qui commencent par __ sont des methodes magiques */
      /* Elles sont appel�es automatiquement par php suite � certains �v�nements. */
      /* Ici c'est l'appel � new sur la classe qui d�clenche l'ex�cution de la m�thode */
      /* des valeurs par d�faut doivent �tre sp�cifi�es pour les param�tres du constructeur sinon
      	 il y aura une erreur lorsqu'il sera appel� automatiquement par PDO 
       */    
      
      public function __construct($i=-1,$p="",$n="", $f="", $t="") {
         $this->idformation = $i;
         $this->prix = $p;
         $this->nom = $n;
         $this->infos = $f;
         $this->type_f = $t;
      }

      public function getIdFormation () {return $this->idformation; }
      public function getPrix() { return $this->prix; }
      public function getNom() { return $this->nom;}
      public function getInfos() { return $this->infos; }
      public function getTypeF() { return $this->type_f; }

      public function __toString() {
        return '';     
      }
}

//test
//$unclient = new Client(5,'Dupont','Le Havre');
//echo $unclient;
?>
