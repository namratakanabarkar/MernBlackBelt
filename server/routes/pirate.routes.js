// import controller
const PirateController = require("./../controllers/pirate.controller")

module.exports = (app) => {
    app.get("/api/pirates", PirateController.allPirates)
    app.get("/api/pirate/:id", PirateController.onePirate)
    app.post("/api/pirate/new", PirateController.createPirate)
    app.patch("/api/pirate/:id", PirateController.updatePirate)
    app.delete("/api/pirate/:id", PirateController.deletePirate)
}