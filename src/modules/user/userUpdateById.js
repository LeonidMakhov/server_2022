import User from './Model';
export default function userUpdateById(req, res) {
  const userId = req.params.userId;

  delete req.body.password; //если вдруг будет запрос на изменение пароля, то мы его удалим как ключ-значение
  // delete.body.roles; пользователю удалили возможные роли для внесения правок
  User.updateOne({ _id: userId }, req.body) //.findByIdAndUpdate(userId, req.body)
    //.limit(2) //вывести только 2 документа (объекта)
    //.skip(2) // пропустить следующие два по фильтру
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User update error');
    });
}
