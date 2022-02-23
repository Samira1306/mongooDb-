/** Dto */
const petsDto = require("../../model/dto/pets.dto");
const config = require("config");

/** Helper */
const helper = require("../helpers/general.helpers");
const notHelper = require("../helpers/notification.helpers");

exports.createPet = (req, res, next) => {
    let pets = {
        contact: req.body.contanct,
        petname: req.body.petname,
        service: req.body.service,
        diseases: req.body.diseases,
        petAge: req.body.petAge,
        petBreed: req.body.petBreed
    };
    petsDto.create(pets, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        
    });
};


exports.updatepets = (req, res, next) => {
    let pets = {
        code: req.body.code,
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        career: req.body.career
    };
    petsDto.update({ _id: req.body.id }, pets, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};


exports.getAll = (req, res, next) => {

    petsDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};


exports.getByCode = (req, res, next) => {

    petsDto.getByCode({ code: req.params.code }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.deletePets = () => {
    petsDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
}