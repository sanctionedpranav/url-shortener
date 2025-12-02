import { nanoid } from "nanoid";
import { addUrl, getBigUrlDB } from "../services/url-service.js";

export const urlShort = async (req, res) => {
  const bigUrl = req.body.bigUrl;
  console.log("Big URL", bigUrl);
  try {
    const num = nanoid(16);
    const doc = await addUrl({ email: 'pranav9728@gmail.com', shortId: num, bigUrl: bigUrl });

    if (doc && doc._id) {
      res.json({ shortUrl: process.env.BASE_URL + "small/" + num });
    } else {
      res.json({ error: "Something went Wrong..." });
    }
  } catch (err) {
    res.json({ error: "Something went Wrong..." });
    console.log('Error in short url', err);
  }
}

export const getBigUrl = async (req, res) => {
  const { code } = req.params;
  try {
    const doc = await getBigUrlDB(code);

    if (doc && doc._id) {
      res.redirect(doc.bigUrl);
    } else {
      res.json({ message: 'Invalid URL' })
    }
  } catch (err) {
    res.json({ message: ' Invalid URL', err })
    console.log("Error is: ", err);
  }

}