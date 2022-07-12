import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ name: "Response successful" });
  if (req.method === "POST") {
    const user = req.body;

    client
      .createIfNotExists(user)
      .then(() => res.status(200).json("Login success"));
  }
}
