const mongoose = require("mongoose");
require("mongoose-type-url");

let cheap_hotel_extra_services_schema = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        reqiured: true,
    },
    hotel_brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ""
    },
    services: {
        type: Array
    }
    /*name: {
        type: String
    },
    description: {
        type: String
    },
    price_per_order: {
        type: Number
    }*/

});

module.exports = new mongoose.model("cheap_hotel_extra_services", cheap_hotel_extra_services_schema);