import express from 'express';
import { getBigUrl, urlShort } from '../../../controllers/url-short-controller.js';

export const shortRoutes = express.Router();

shortRoutes.post('/short-url', urlShort);
shortRoutes.get('/small/:code', getBigUrl);