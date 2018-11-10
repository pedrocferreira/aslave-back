
import { isNullOrUndefined } from 'util'
import fs from 'fs'
class PeopleController {

    constructor(peopleModel, storge) {
        this.api = new controllerAPI;
        this.peopleModel = Peoples
        this.storge = storage
    }

    get(req, res) {
        let id = req.parms.id

        return this.peopleModel.people(id)
            .then(response => {
                res.json((response, "ok")
                    .defaultMsg())
            })
            .cath(error => {
                this.peopleModel.people2(id)
                    .then(response => {
                        res.json((response, "ok")
                            .defaultMsg())
                    })

                    .catch(error => {
                        res.status(400).json({status: 400, msg:
                        "Não existe Evento", obj: error})
                    })
            })
    }

    getAll(req, res) {

        return this.peopleModel.people()
            .then(response => {
                res.json((response, "ok get all").defaultMsg())
            })
            .catch(error => {
                res.status(400).json({ status: 400, msg: "Não existe eventos", obj: error })
            })
    }










}

module.exports = PeopleController;
