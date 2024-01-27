import { Router } from 'express';

import * as contatosController from '../controllers/contatos.controller';

const router = Router();

router.get('/contatos', contatosController.all);
router.post('/contatos', contatosController.add);
router.put('/contatos/:id', contatosController.update);
router.delete('/contatos/:id', contatosController.remove);

export default router;