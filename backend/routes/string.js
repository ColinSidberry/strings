"use strict";

/** Routes for companies. */

const express = require("express");

const router = new express.Router();

const strings = [];

/** POST /  =>  { string }
 *
 * string should be { input }
 *
 * Returns { input }
 */

router.post("/", async function (req, res, next) {
  console.debug('req.body: ', req.body); 
  
  const string = req.body;
  strings.unshift(string);
  console.debug({ strings });
  return res.status(201).json({ string });
});

/** GET /  =>
 *   { strings: [ { input }, ... ] }
 */

router.get("/", async function (req, res, next) {
  return res.json({ strings });
});

module.exports = router;
