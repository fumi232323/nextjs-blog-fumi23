export default function handler(req, res) {
  const email = req.body.email
  // Then save email to your database, etc...

  // req = HTTP incoming message, res = HTTP server response
  res.status(200).json({ test: "Hello"})
}
