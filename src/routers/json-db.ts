import express from "express";
import {
  editDatabase,
  readDatabase,
  createDatabase,
  getDataByKey,
  deleteDataByKey,
  clearDatabase,
  postDataByKey,
  patchDataByKey,
  putDataByKey,
} from "../controllers/json-db";
import DBIsExist from "../middlewares/db-is-exist";
import asyncHandler from "../utils/async-handler";

const jsonDBRouter = express.Router();

jsonDBRouter.post("/", asyncHandler(createDatabase));
jsonDBRouter.put("/:db", asyncHandler(DBIsExist), asyncHandler(editDatabase));
jsonDBRouter.get("/:db", asyncHandler(DBIsExist), asyncHandler(readDatabase));
jsonDBRouter.delete(
  "/:db",
  asyncHandler(DBIsExist),
  asyncHandler(clearDatabase)
);
jsonDBRouter.get(
  "/:db/:key",
  asyncHandler(DBIsExist),
  asyncHandler(getDataByKey)
);
jsonDBRouter.delete(
  "/:db/:key",
  asyncHandler(DBIsExist),
  asyncHandler(deleteDataByKey)
);
jsonDBRouter.post(
  "/:db/:key",
  asyncHandler(DBIsExist),
  asyncHandler(postDataByKey)
);
jsonDBRouter.patch(
  "/:db/:key",
  asyncHandler(DBIsExist),
  asyncHandler(patchDataByKey)
);
jsonDBRouter.put(
  "/:db/:key",
  asyncHandler(DBIsExist),
  asyncHandler(putDataByKey)
);

export default jsonDBRouter;