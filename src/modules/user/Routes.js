import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
import userUpdateById from './userUpdateById';
import userDeleteById from './userDeleteById';
import userDeleteAll from './userDeleteAll';

const router = Router();

router.post('/', userRegister); //т.к. пришло на роутер /userRegister И ТЕПЕРЬ ПРОВЕРЯЕТ запрос НТТР!!! т.к.запрос НТТР POST,
// то выполнить контроллер info - 3 действие
router.get('/', userGetAll); //т.к. пришло на роутер /userGetAll И ТЕПЕРЬ ПРОВЕРЯЕТ запрос НТТР!!! т.к.запрос НТТР GET,
router.get('/:userId', userGetById); //т.к. пришло на роутер /userGetAll И ТЕПЕРЬ ПРОВЕРЯЕТ запрос НТТР!!! т.к.запрос НТТР GET,
router.patch('/:userId', userUpdateById); //т.к. пришло на роутер /userGetAll И ТЕПЕРЬ ПРОВЕРЯЕТ запрос НТТР!!! т.к.запрос НТТР PATCH,
router.delete('/:userId', userDeleteById); //т.к. пришло на роутер /userGetAll И ТЕПЕРЬ ПРОВЕРЯЕТ запрос НТТР!!! т.к.запрос НТТР DELETE,
router.delete('/', userDeleteAll); //т.к. пришло на роутер /userGetAll И ТЕПЕРЬ ПРОВЕРЯЕТ запрос НТТР!!! т.к.запрос НТТР DELETE,

export default router;
