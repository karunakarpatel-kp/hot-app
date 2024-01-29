import { NextApiRequest, NextApiResponse } from "next";
import utf8 from "base-64";
import base64 from "base-64";

const TextToImageServiceHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const reqBody = req.body;

  const modelURL = reqBody.modelURL;
  const userPrompt = reqBody.userPrompt;

  const text2ImageRes = await fetch(modelURL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.HUGGING_FACE_TOKEN}`,
    },
    body: JSON.stringify({
      inputs: userPrompt,
    }),
  });

  const text2ImageData = await text2ImageRes.arrayBuffer();
  const base64ImageData = Buffer.from(text2ImageData).toString("base64");

  //? below code
  const imgConstruct = `data:image/jpeg;base64, ${base64ImageData}`;
  const img = `<img src='${imgConstruct}' alt="simple" width="200" height="120" />`;
  res.send(imgConstruct);
};

export default TextToImageServiceHandler;

// if (!text2ImageRes.ok) {
//   res.send({ message: "Internal Server Error" });

// }
