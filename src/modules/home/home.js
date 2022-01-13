export const a = 123;
export const b = 345;

export default function home(req, res) {
  res.status(400).json({
    name: 'Hello Leonid 202122222' + a + b,
    component: [1, '142', 48],
    q: true,
  });
}
