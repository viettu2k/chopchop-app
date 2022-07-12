import { allPostsQuery } from "../../../utils/queries";
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ name: "Response successful" });
  if (req.method === "GET") {
    const query = allPostsQuery();

    const data = await client.fetch(query);

    res.status(200).json(data);
  }
}
