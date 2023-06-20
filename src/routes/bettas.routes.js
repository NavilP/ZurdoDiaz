import {Router} from 'express';
import {getStock, getBettaByName, getBettaById, getBettaByGenre, getBettaByLine, getBettaByCountry} from '../controllers/bettas.controllers.js';

const router = Router();

router.get('/stock', getStock);

router.get('/stockName/:betta', getBettaByName);

router.get('/stockId/:idBetta', getBettaById);

router.get('/stockGenre/:genre', getBettaByGenre);

router.get('/stockLine/:idLinea', getBettaByLine);

router.get('/stockCountry/:country', getBettaByCountry);

/*router.post('/ingredients', createIngredients);

router.patch('/ingredients/:ingred', updateIngredients);

router.delete('/ingredients/:ingred', deleteIngredients);*/


export default router