// import model
const {Pirate} = require("./../models/pirate.model")

// find all
module.exports.allPirates = (req, res) => {
    Pirate.find().sort("name")
        .then(pirates=>res.json(pirates))
        .catch(err=>res.status(400).json(err))
}

// find one
module.exports.onePirate = (req, res) => {
    Pirate.findOne({_id: req.params.id})
        .then(pirate=>res.json(pirate))
        .catch(err=>res.status(400).json(err))
}

// create 
module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate=>res.json(newPirate))
        .catch(err=>res.status(400).json(err))
}

// delete 
module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({_id: req.params.id})
        .then(result=>res.json(result))
        .catch(err=>res.status(400).json(err))
}

// update
module.exports.updatePirate = (req, res) => {
    Pirate.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true}
    )
        .then(pirate=>res.json(pirate))
        .catch(err=>res.status(400).json(err))
}