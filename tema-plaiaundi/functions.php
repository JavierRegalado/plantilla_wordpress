<?php

add_theme_support('post-thumbnails');
function tema_plaiaundi_estilos() {

    wp_enqueue_style(
        'tema-plaiaundi-style',
        get_stylesheet_uri()
    );

}

add_action('wp_enqueue_scripts', 'tema_plaiaundi_estilos');
register_nav_menus(
    array(
        'menu-principal' => 'Menú principal'
    )
);

function tema_plaiaundi_obtener_ejercicio_seleccionado() {
    if (!is_page_template('page-ejercicios.php') || !isset($_GET['ejercicio']) || !is_scalar($_GET['ejercicio'])) {
        return null;
    }

    $ejercicio = filter_var(wp_unslash($_GET['ejercicio']), FILTER_VALIDATE_INT);

    if ($ejercicio === false || $ejercicio < 1 || $ejercicio > 16) {
        return null;
    }

    return $ejercicio;
}

function tema_plaiaundi_encolar_ejercicio() {
    $ejercicio = tema_plaiaundi_obtener_ejercicio_seleccionado();

    if ($ejercicio === null) {
        return;
    }

    $archivo = sprintf('/js/ejercicios/ejercicio%02d.js', $ejercicio);

    wp_enqueue_script(
        'tema-plaiaundi-ejercicio',
        get_theme_file_uri($archivo),
        array(),
        null,
        true
    );
}

add_action('wp_enqueue_scripts', 'tema_plaiaundi_encolar_ejercicio');