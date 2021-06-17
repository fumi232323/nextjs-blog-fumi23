import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const email = req.body.email
  // Then save email to your database, etc...

  // req = HTTP incoming message, res = HTTP server response
  res.status(200).json({ test: "Hello"})
}
