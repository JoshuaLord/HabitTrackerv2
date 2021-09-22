var express = require('express');
const Habit = require('../models/Habit.model');
var router = express.Router();

// GET ALL
router.get('/habits', function(req, res) {
    Habit.find({})
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(500).json({ 
                success: false,
                msg: 'Failure to grab habits. Error: ' + err
            });
        })
});

// CREATE
router.put('/habits', function(req, res) {  
    let days = [
        req.body.monday,
        req.body.tuesday,
        req.body.wednesday,
        req.body.thursday,
        req.body.friday,
        req.body.saturday,
        req.body.sunday
    ];

    let new_habit = new Habit({
        name: req.body.name,
        description: req.body.description,
        days: days
    });

    new_habit.save()
        .then((result) => {
            res.json({
                success: true,
                msg: "Successfully Added",
                result: {
                    _id: result._id,
                    name: result.name,
                    description: result.description,
                    days: result.days
                }
            });
        })
        .catch((err) => {
            if (err.errors) {
                var message = "";
                
                if (err.errors.name) {
                    message += err.errors.name.message;
                }

                if (err.errors.description) {
                    message += err.errors.description.message;
                }

                res.status(400).json({ success: false, msg: message });
                return;
            }
        });
});

// EDIT
router.get('/habits/:id', async (req, res) => {
    try {
      const habit = await Habit.findById(req.params.id);
      res.send({ name: habit.name, description: habit.description, days: habit.days });
    } catch (err) {
      res.status(404).send({ message: 'Habit not found!' });
    }
});

// UPDATE
router.patch('/habits/', async (req, res) => {
    const habit = await Habit.findById(req.body.id);

    let days = [
        req.body.monday,
        req.body.tuesday,
        req.body.wednesday,
        req.body.thursday,
        req.body.friday,
        req.body.saturday,
        req.body.sunday
    ];

    habit.name = req.body.name;
    habit.description = req.body.description;
    habit.days = days;

    habit.save()
        .then((result) => {
            res.json({
                success: true,
                msg: "Successfully Updated",
                result: {
                    _id: result._id,
                    name: result.name,
                    description: result.description
                }
            });
        })
        .catch((err) => {
            if (err.errors) {
                var message = "";
                
                if (err.errors.name) {
                    message += err.errors.name.message;
                }

                if (err.errors.description) {
                    message += err.errors.description.message;
                }

                res.status(400).json({ success: false, msg: message });
                return;
            }
        });
});

// DELETE
router.delete('/habits/:id', function(request, result, next) {
    Habit.findByIdAndDelete(request.params.id, request.body, function (err, post) {
        if (err) return next(err);
        result.json(post);
    });
});

module.exports = router;