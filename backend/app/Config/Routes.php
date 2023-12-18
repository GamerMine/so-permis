<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/testBado', 'Home::bado');
$routes->get('/getListePermis', 'ListePermis::bado');
$routes->get('/getListeActus', 'BDD::getListeActus');
$routes->match(['post', 'options'],'/TestConnexion', 'Connexion::TestConnexion');
$routes->get('/GetNewsletter', 'Newsletter::GetNewsletter');
$routes->post('/DeleteNewsletter', 'Newsletter::DeleteNewsletter');
$routes->get('/getFormations', 'Forfaits::getFormations');
$routes->get('/getArticles', 'Articles::getArticles');
$routes->post('/CreationCompte', 'Connexion::TestCreation');


