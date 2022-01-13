import User from './Model';
export default function userRegister(req, res) {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then(() => {
      res.status(200).json('user created'); // для получения объекта написать res.status(200),json(names);
    }) // все хорошо
    .catch(() => {
      res.status(400).json('user not created'); // для получения объекта написать res.status(200),json(names);
    }) // какая то ошибка
    .finally(() => {
      console.log('END');
    }); // выполниться всегда
}
