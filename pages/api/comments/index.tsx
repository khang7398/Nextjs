import type { NextApiRequest, NextApiResponse } from "next";

import { comments } from "../../../data/comments";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.json(comments);
  }
}
