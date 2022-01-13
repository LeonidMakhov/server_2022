import User from './Model';
export default function userGetAll(req, res) {
  User.find()
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
