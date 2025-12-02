import { urlModel } from "../models/url-schema.js";

export const getBigUrlDB = async (code) => {
  const document = await urlModel.findOne({ shortId: code }).exec();
  return document;
}

export const addUrl = async (urlObject) => {
  try {
    const doc = await urlModel.create(urlObject);
    return doc;
  } catch (error) {
    throw error;
  }
}