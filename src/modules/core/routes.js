import infoRouter from '../info/Routes'; // здесь главная развилка роутеров
import userRouter from '../user/Routes'; // здесь главная развилка роутеров

export default function routes(app) {
  app.use('/info', infoRouter); //если придет запрос на /info то выполнить контроллер infoRouter - 2 действие
  app.use('/user', userRouter); //если придет запрос на /info то выполнить контроллер infoRouter - 2 действие
}
