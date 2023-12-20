<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/testBado', 'Home::bado');
$routes->get('/getListePermis', 'ListePermis::bado');
$routes->get('/getListeActus', 'BDD::getListeActus');
$routes->match(['post', 'options'], '/TestConnexion', 'Connexion::TestConnexion');
$routes->get('/GetNewsletter', 'Newsletter::GetNewsletter');
$routes->post('/DeleteNewsletter', 'Newsletter::DeleteNewsletter');
$routes->post('/AjouterFormations', 'Forfaits::AjouterFormations');
$routes->get('/getFormations', 'Forfaits::getFormations');
$routes->post('/DeleteFormations', 'Forfaits::DeleteFormations');

$routes->get('/getArticles', 'Articles::getArticles');
$routes->post('/AjouterArticle', 'Articles::AjouterArticle');
$routes->post('/DeleteArticle', 'Articles::DeleteArticle');
$routes->get('/ModifierArticle/(:num)', 'Articles::ModifierArticle/$1');
$routes->post('/UpdateArticle', 'Articles::UpdateArticle');

$routes->post('/UpdateFormation', 'Forfaits::UpdateFormation');
$routes->get('/ModifierFormation/(:num)', 'Forfaits::ModifierFormation/$1');


$routes->post('/CreationCompte', 'Connexion::TestCreation');
$routes->post('/Deconnexion', 'Connexion::deconnexion');

$routes->match(['post', 'options'], '/TestConnexion', 'Connexion::TestConnexion');
$routes->POST('/subscribeNewsletter', 'Contact::subscribeNewsletter');
$routes->post('/EstAdmin', 'Connexion::EstConnecte');
