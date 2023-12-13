<?php
/*classe permettant de representer les tuples de la table client */
class ACTUALITE {
      /*avec PDO, il faut que les noms attributs soient les m�mes que ceux de la table*/
      private $idactualite;
      private $titreactualite;
      private $infosactualite;
      private $imageurl;
      private $sources;

      /* Les m�thodes qui commencent par __ sont des methodes magiques */
      /* Elles sont appel�es automatiquement par php suite � certains �v�nements. */
      /* Ici c'est l'appel � new sur la classe qui d�clenche l'ex�cution de la m�thode */
      /* des valeurs par d�faut doivent �tre sp�cifi�es pour les param�tres du constructeur sinon
      	 il y aura une erreur lorsqu'il sera appel� automatiquement par PDO 
       */    
      
      public function __construct($n=-1,$t="",$f="", $i="",$s="") {
         $this->idactualite = $n;
         $this->titreactualite = $t;
         $this->infosactualite = $f;
         $this->imageurl = $i;
         $this->sources = $s;
      }

      public function getIdActualite () {return $this->idactualite; }
      public function getTitreActualite() { return $this->titreactualite; }
      public function getInfosActualite() { return $this->infosactualite;}
      public function getImageURL() { return $this->imageurl; }
      public function getSources() { return $this->sources; }

      public function __toString() {
        return '';     
      }
}

//test
//$unclient = new Client(5,'Dupont','Le Havre');
//echo $unclient;
?>
