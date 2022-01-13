import User from './Model';
export default function userDeleteAll(req, res) {

  const userId = req.params.userId;

  User.deleteMany()
    //.limit(2) //вывести только 2 документа (объекта)
    //.skip(2) // пропустить следующие два по фильтру
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User delete all error');
    });
}
