import express from "express";
import {
  editJsonDB,
  readJsonDB,
  createJsonDB,
  getKeyOfJsonDB,
  deleteKeyOfJsonDB,
  clearJsonDB,
  postKeyOfJsonDB,
  putKeyOfJsonDB,
  revokeUserDBToken,
} from "../controllers/json-db.js";
import DBIsExist from "../middlewares/db-is-exist.js";
import asyncHandler from "../utils/async-handler.js";
import isAuth from "../middlewares/is-auth.js";

const jsonDBRouter = express.Router();

jsonDBRouter.post("/", asyncHandler(createJsonDB));
jsonDBRouter.put("/", asyncHandler(DBIsExist), asyncHandler(editJsonDB));
jsonDBRouter.get("/", asyncHandler(DBIsExist), asyncHandler(readJsonDB));
jsonDBRouter.delete("/", asyncHandler(DBIsExist), asyncHandler(clearJsonDB));
jsonDBRouter.post("/revoke-token", isAuth, revokeUserDBToken);
jsonDBRouter.get(
  "/:key",
  asyncHandler(DBIsExist),
  asyncHandler(getKeyOfJsonDB)
);
jsonDBRouter.delete(
  "/:key",
  asyncHandler(DBIsExist),
  asyncHandler(deleteKeyOfJsonDB)
);
jsonDBRouter.post(
  "/:key",
  asyncHandler(DBIsExist),
  asyncHandler(postKeyOfJsonDB)
);

jsonDBRouter.put(
  "/:key",
  asyncHandler(DBIsExist),
  asyncHandler(putKeyOfJsonDB)
);

export default jsonDBRouter;
