import { Router } from "./route.js"; 

const router = new Router();
router.add('/index.html', "/pages/home.html");
router.add('/universo', '/pages/universo.html');
router.add('/exploracao', '/pages/exploracao.html')
router.add(404, '/pages/error.html')

router.handle();
window.onpopstate = () => router.handle();
window.route = () => router.route();

