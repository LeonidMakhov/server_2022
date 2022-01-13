let count = 0;
const names = [];

export default function info(req, res) {
  // выполниться это действие - 4
  const a = req.body.a;
  const b = req.body.b;
  const sum = a + b;
  names.push(req.body.name);
  res.send('Info here----- !!!' + sum + count++ + names); // для получения объекта написать res.status(200),json(names);
}
