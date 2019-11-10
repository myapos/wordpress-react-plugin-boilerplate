<?php

// Conditionally load JS on plugin settings pages only
function wpplugin_admin_scripts( $hook ) {

  // wp_register_script(
  //   'wpplugin-admin',
  //   WPPLUGIN_URL . 'admin/js/wpplugin-admin.js',
  //   ['jquery'],
  //   time()
  // );

  wp_register_script(
    'wpplugin-admin',
    WPPLUGIN_URL . 'dist/admin.bundle.js',
    [],
    time()
  );

  wp_localize_script( 'wpplugin-admin', 'wpplugin', [
      'hook' => $hook
  ]);

  if( 'toplevel_page_wpplugin' == $hook ) {
      wp_enqueue_script( 'wpplugin-admin' ,'',[],'',true);
  }

}

add_action( 'admin_enqueue_scripts', 'wpplugin_admin_scripts' );


// Conditionally load JS on single post pages
function wpplugin_frontend_scripts() {

  // wp_register_script(
  //   'wpplugin-frontend',
  //   WPPLUGIN_URL . 'frontend/js/wpplugin-frontend.js',
  //   [],
  //   time()
  // );

   $path = WPPLUGIN_PATH . 'dist/';

  if ($handle = opendir($path)) {

    /* This is the correct way to loop over the directory. */
    while (false !== ($entry = readdir($handle))) {
        /* filter css files */
        preg_match('/\d+.bundle.js/', $entry, $matches);
        if(sizeof($matches) > 0) {

          // enqueue each match
          foreach ($matches as $key => $match) {

            $jsPath =  WPPLUGIN_URL .'dist/'.$entry;
            //  wp_register_style(
            //    $jsPath,
            //    $jsPath,
            //   [],
            //   time()
            // );

            // if( 'toplevel_page_wpplugin' == $hook ) {
            //   wp_enqueue_style($jsPath );
            // }

             if(is_single() ) {
                  wp_enqueue_script( $jsPath,'',[],'',true );
              }
              wp_register_script(
              $match,
              $jsPath,
              [],
              time()
            );
          }
        }

    }

    closedir($handle);
  }

   wp_register_script(
    'wpplugin-frontend',
    WPPLUGIN_URL . 'dist/frontEnd.bundle.js',
    [],
    time()
  );

  if(is_single() ) {
      wp_enqueue_script( 'wpplugin-frontend','',[],'',true );
  }

}

add_action( 'wp_enqueue_scripts', 'wpplugin_frontend_scripts', 100 );
