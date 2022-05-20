const mongoose = require("mongoose")

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    image: {
        type: String,
        required: [true, "Image link required"]
    },
    chests: {
        type: Number,
        required: [true, "Number of treasure chests required"]
    },
    catchphrase: {
        type: String,
        required: [true, "Catch Phrase required"]
    },
    position: {
        type: String,
        required: [true, "Crew position required"]
    },
    pegleg: {
        type: Boolean,
        required: [true, "Peg leg option required"]
    },
    eyepatch: {
        type: Boolean,
        required: [true, "Eye Patch option required"]
    },
    hookhand: {
        type: Boolean,
        required: [true, "Hook Hand option required"]
    }
}, {timestamps: true})

// creating schema
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);
