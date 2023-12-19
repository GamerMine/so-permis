<?php
require(APPPATH . 'Models/ACTUALITE.inc.php');
require(APPPATH . 'Models/FORMATION.inc.php');
require(APPPATH . 'Models/ADMINISTRATEUR.inc.php');
require(APPPATH . 'Models/NEWSLETTER.inc.php');
class DB
{
     private static $instance = null; //m�morisation de l'instance de DB pour appliquer le pattern Singleton
     private $connect = null; //connexion PDO � la base

     /************************************************************************/
     //	Constructeur gerant  la connexion � la base via PDO
     //	NB : il est non utilisable a l'exterieur de la classe DB
     /************************************************************************/
     private function __construct()
     {
          // Connexion � la base de donn�es
          $connStr = 'pgsql:host=host.dwightstudio.fr port=25565 dbname=sopermis'; // A MODIFIER ! 
          try {
               // Connexion � la base
               $this->connect = new PDO($connStr, 'sopermis', 'sopermis'); //A MODIFIER !
               // Configuration facultative de la connexion
               $this->connect->setAttribute(PDO::ATTR_CASE, PDO::CASE_LOWER);
               $this->connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          } catch (PDOException $e) {
               echo "probleme de connexion :" . $e->getMessage();
               return null;
          }
     }

     /************************************************************************/
     //	Methode permettaDBnt d'obtenir un objet instance de DB
     //	NB : cet objet est unique pour l'ex�cution d'un m�me script PHP
     //	NB2: c'est une methode de classe.
     /************************************************************************/
     public static function getInstance()
     {
          if (is_null(self::$instance)) {
               try {
                    self::$instance = new DB();
               } catch (PDOException $e) {
                    echo $e;
               }
          } //fin IF
          $obj = self::$instance;

          if (($obj->connect) == null) {
               self::$instance = null;
          }
          return self::$instance;
     } //fin getInstance	 

     /************************************************************************/
     //	Methode permettant de fermer la connexion a la base de donn�es
     /************************************************************************/
     public function close()
     {
          $this->connect = null;
     }

     /****************************************Home********************************/
     //	Methode uniquement utilisable dans les m�thodes de la class DB 
     //	permettant d'ex�cuter n'importe quelle requ�te SQL
     //	et renvoyant en r�sultat les tuples renvoy�s par la requ�te
     //	sous forme d'un tableau d'objets
     //	param1 : texte de la requ�te � ex�cuter (�ventuellement param�tr�e)
     //	param2 : tableau des valeurs permettant d'instancier les param�tres de la requ�te
     //	NB : si la requ�te n'est pas param�tr�e alors ce param�tre doit valoir null.
     //	param3 : nom de la classe devant �tre utilis�e pour cr�er les objets qui vont
     //	repr�senter les diff�rents tuples.
     //	NB : cette classe doit avoir des attributs qui portent le m�me que les attributs
     //	de la requ�te ex�cut�e.
     //	ATTENTION : il doit y avoir autant de ? dans le texte de la requ�te
     //	que d'�l�ments dans le tableau pass� en second param�tre.
     //	NB : si la requ�te ne renvoie aucun tuple alors la fonction renvoie un tableau vide
     /************************************************************************/
     private function execQuery($requete, $tparam, $nomClasse)
     {
          //on pr�pare la requ�te
          $stmt = $this->connect->prepare($requete);
          //on indique que l'on va r�cup�re les tuples sous forme d'objets instance de Client
          $stmt->setFetchMode(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, $nomClasse);
          //on ex�cute la requ�te
          if ($tparam != null) {
               $stmt->execute($tparam);
          } else {
               $stmt->execute();
          }
          //r�cup�ration du r�sultat de la requ�te sous forme d'un tableau d'objets
          $tab = array();
          $tuple = $stmt->fetch(); //on r�cup�re le premier tuple sous forme d'objet
          if ($tuple) {
               //au moins un tuple a �t� renvoy�
               while ($tuple != false) {
                    $tab[] = $tuple; //on ajoute l'objet en fin de tableau
                    $tuple = $stmt->fetch(); //on r�cup�re un tuple sous la forme
                    //d'un objet instance de la classe $nomClasse	       
               } //fin du while	           	     
          }
          return $tab;
     }

     /************************************************************************/
     //	Methode utilisable uniquement dans les m�thodes de la classe DB
     //	permettant d'ex�cuter n'importe quel ordre SQL (update, delete ou insert)
     //	autre qu'une requ�te.
     //	R�sultat : nombre de tuples affect�s par l'ex�cution de l'ordre SQL
     //	param1 : texte de l'ordre SQL � ex�cuter (�ventuellement param�tr�)
     //	param2 : tableau des valeurs permettant d'instancier les param�tres de l'ordre SQL
     //	ATTENTION : il doit y avoir autant de ? dans le texte de la requ�te
     //	que d'�l�ments dans le tableau pass� en second param�tre.
     /************************************************************************/
     private function execMaj($ordreSQL, $tparam)
     {
          $stmt = $this->connect->prepare($ordreSQL);
          $res = $stmt->execute($tparam); //execution de l'ordre SQL      	     
          return $stmt->rowCount();
     }

     /*************************************************************************
      * Fonctions qui peuvent �tre utilis�es dans les scripts PHP
      *************************************************************************/

     public function getActualites()
     {
          $requete = 'SELECT * FROM ACTUALITE';
          return $this->execQuery($requete, null, 'ACTUALITE');
     }

     public function insertActualite($titre, $infos, $image, $sources)
     {
          $requete = 'insert into ACTUALITE (titreActualite, infosActualite, imageURL, sources) values(?,?,?,?)';
          $tparam = array($titre, $infos, $image, $sources);
          return $this->execMaj($requete, $tparam);
     }

     public function getActualite($id)
     {
          $requete = 'select * from ACTUALITE where idactualite = ?';
          return $this->execQuery($requete, array($id), 'ACTUALITE');
     }

     public function deleteActualite($id)
     {
          $requete = 'delete from ACTUALITE where idactualite = ?';
          $tparam = array($id);
          return $this->execMaj($requete, $tparam);
     }

     public function updateActualite($id, $titre, $infos, $image, $sources)
     {
          $requete = 'update ACTUALITE set titre = ?, infos =?, image = ?, sources = ? where idActualite = ?';
          $tparam = array($titre,$infos, $image, $sources, $id);
          return $this->execMaj($requete, $tparam);
     }
     //Formations

     public function getFormations()
     {
          $requete = 'SELECT * FROM FORMATION';
          return $this->execQuery($requete, null, 'FORMATION');
     }
     public function insertFormation($prix, $nom, $infos, $type_f)
     {
          $requete = 'insert into FORMATION values(?,?,?,?)';
          $tparam = array($prix, $nom, $infos, $type_f);
          return $this->execMaj($requete, $tparam);
     }

     public function getFormation($id)
     {
          $requete = 'select * from FORMATION (prix, nom, infos) where idformation = ?';
          return $this->execQuery($requete, array($id), 'FORMATION');
     }

     public function deleteFormation($id)
     {
          $requete = 'delete from FORMATION where idformation = ?';
          $tparam = array($id);
          return $this->execMaj($requete, $tparam);
     }

     public function updateFormation($id, $prix, $nom, $infos, $type_f)
     {
          $requete = 'update Formation set prix = ?, nom =?, infos = ?, type_f = ? where idFormation = ?';
          $tparam = array($prix,$nom, $infos, $type_f, $id);
          return $this->execMaj($requete, $tparam);
     }

     //Administrateurs

     public function getAdministrateurs()
     {
          $requete = 'SELECT * FROM ADMINISTRATEUR';
          return $this->execQuery($requete, null, 'ADMINISTRATEUR');
     }
     public function insertAdministrateur($email, $password, $id_unique)
     {
          $requete = 'insert into ADMINISTRATEUR (email, password, id_unique) values(?,?,?)';
          $tparam = array($email, $password, $id_unique);
          return $this->execMaj($requete, $tparam);
     }

     public function getAdministrateur($id)
     {
          $requete = 'select * from ADMINISTRATEUR where idadmin = ?';
          return $this->execQuery($requete, array($id), 'FORMATION');
     }

     public function deleteAdministrateur($id)
     {
          $requete = 'delete from ADMINISTRATEUR where idadmin = ?';
          $tparam = array($id);
          return $this->execMaj($requete, $tparam);
     }
     public function updateAdministrateur($id,$email, $password, $id_unique)
     {
          $requete = 'update Administrateur set email = ?, password =?, id_unique = ? where idAdmin = ?';
          $tparam = array($email,$password, $id_unique, $id);
          return $this->execMaj($requete, $tparam);
     }


     //Newsletter

     public function getNewsletters()
     {
          $requete = 'SELECT * FROM NEWSLETTER';
          return $this->execQuery($requete, null, 'NEWSLETTER');
     }
     public function insertNewsletter($email, $nom, $prenom)
     {
          $requete = 'insert into NEWSLETTER (email,nom, prenom, guid, actif) values(?,?,?)';
          $tparam = array($email, $nom, $prenom);
          return $this->execMaj($requete, $tparam);
     }



     public function getNewsletter($id)
     {
          $requete = 'select * from NEWSLETTER where idnewsletter = ?';
          return $this->execQuery($requete, array($id), 'NEWSLETTER');
     }

     public function deleteNewsletter($id)
     {
          $requete = 'delete from NEWSLETTER where idnewsletter = ?';
          $tparam = array($id);
          return $this->execMaj($requete, $tparam);
     }




     public function updateAdrClient($idcli, $adr)
     {
          $requete = 'update client set ville = ? where ncli = ?';
          $tparam = array($adr, $idcli);
          return $this->execMaj($requete, $tparam);
     }
} //fin classe DB
