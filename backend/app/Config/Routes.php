<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/testBado', 'Home::bado');
$routes->get('/getListePermis', 'ListePermis::bado');
$routes->match(['post', 'options'],'/TestConnexion', 'Connexion::TestConnexion');


