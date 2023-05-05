"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = require("../controller/ProductController");
const leaderBoardController = new ProductController_1.default();
const router = (0, express_1.Router)();
router.post('/product', leaderBoardController.createMany);
exports.default = router;
//# sourceMappingURL=Product.Router.js.map