import User from './Model';
export default function userGetById(req, res) {
  const userId = req.params.userId;

  User.findById(userId)
    //.limit(2) //вывести только 2 документа (объекта)
    //.skip(2) // пропустить следующие два по фильтру
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User get all error');
    });
}
