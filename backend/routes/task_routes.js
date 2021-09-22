var express = require('express');
const Task = require('../models/Task.model');
var router = express.Router();

// GET ALL
router.get('/tasks', function(req, res) {
    Task.find({})
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(500).json({ 
                success: false,
                msg: 'Failure to grab tasks. Error: ' + err
            });
        })
});

// Update Checked
router.patch('/tasks', async (req, res) => {
    const task = await Task.findById(req.body.id);

    task.complete = req.body.checked;

    task.save()
        .then((result) => {
            res.json({
                success: true,
                msg: "Successfully Updated"
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
})

// Generate tasks for today
router.post('/tasks/generate-tasks', function(req, res) {    
    let habits = req.body.habits;
    let today = new Date();
    let today_index = today.getDay(); // 0-6

    if (habits === undefined || habits.length == 0) {
        return;
    }

    habits.forEach(habit => {
        if (habit.days[today_index]) {
            let todays_date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

            Task.find({date: todays_date})
                .then((result) => {
                    if (result !== undefined && result.length >= 1) {
                        return;
                    } else {
                        let new_task = new Task({
                            habit_id: habit._id,
                            name: habit.name,
                            description: habit.description,
                            date: todays_date,
                            complete: false
                        });

                        new_task.save()
                            .then((result) => {
                                res.json({
                                    success: true,
                                    msg: "Successfully Added",
                                    result: {
                                        _id: result._id,
                                        name: result.name,
                                        description: result.description,
                                        date: result.date
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
                    }
                });
        }
    });
}); 


module.exports = router;