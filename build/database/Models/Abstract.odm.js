"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let AbstractODM = class AbstractODM {
    constructor(model, schema, modelName) {
        this.model = model;
        this.schema = schema;
        this.modelName = modelName;
    }
    async find() {
        return this.model.find().exec();
    }
    async findOne(data) {
        return this.model.findOne({ ...data }).exec();
    }
    async create(data) {
        const createdObj = new this.model(data);
        return createdObj.save();
    }
    async findOneAndUpdate(id, data, options = { new: true }) {
        if (!(0, mongoose_1.isValidObjectId)(id))
            return null;
        const result = await this.model.findByIdAndUpdate(id, data, options).exec();
        return result ? result.toObject() : null;
    }
    async delete(id) {
        if (!(0, mongoose_1.isValidObjectId)(id))
            return null;
        return this.model.findByIdAndDelete(id).exec();
    }
};
AbstractODM = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('modelName')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Schema, String])
], AbstractODM);
exports.default = AbstractODM;
//# sourceMappingURL=Abstract.odm.js.map