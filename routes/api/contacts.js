const express = require("express");
const ctrl = require("../../controllers/contacts");
const { validateBody, checkBody } = require("../../middelwares");
const schemas = require("../../schemas/contacts");
const ctrlWrapper = require("../../helpers/ctrlWrapper");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listContacts));
router.get("/:id", ctrlWrapper(ctrl.getContactById));
router.post(
  "/",
  checkBody,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addContact)
);
router.delete("/:id", ctrlWrapper(ctrl.removeContact));
router.put(
  "/:id",
  checkBody,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateContact)
);

module.exports = router;
