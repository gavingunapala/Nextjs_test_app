const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  UserName: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  OrderedItems: {
    type: String,
    required: true,
  },
  OrderedDate: {
    type: String,
    required: true,
  },
  DeliveryDate: {
    type: String,
    required: true,
  },
  DeliveryPartner: {
    type: String,
    required: true,
  },
  TotlePrice: {
    type: String,
    required: true,
  },
  
});
module.exports =
  mongoose.models.TodoDataModel || mongoose.model("TodoDataModel", NoteSchema);