import { Router } from 'express';
import info from './info';

const router = Router();

router.post('/', info); //т.к. пришло на роутер /info И ТЕПЕРЬ ПРОВЕРЯЕТ запрос НТТР!!! т.к.запрос НТТР POST,
router.get('/', info); //т.к. пришло на роутер /info И ТЕПЕРЬ ПРОВЕРЯЕТ запрос НТТР!!! т.к.запрос НТТР POST,
// то выполнить контроллер info - 3 действие

export default router;
