// let BACKEND_PORT;

// if (process.env.PRODUCTION) {
//   BACKEND_PORT = 3001;
// } else {
//   BACKEND_PORT = 3000;
// }
// http://localhost/wordpress/index.php/wp-json/wp/v2/
export const SERVER_BASE_URL = process.env.PRODUCTION ? document.location.host : 'localhost/demo.com/?rest_route=/wp/v2';
