const router = require('express').Router();
const Todo = require('../api/todo/Todo');

router.post("/api/todos", async (req, res) => {
    await Todo.create(req.body);
    res.send(200);
});

router.get("/api/todos", async (req, res) => {
    let t = await Todo.find();
    res.send(t);
});

router.get("/api/todos/:description", async (req, res) => {
    const description = req.params.description;
    await Todo.find({ description }).then((resp)=>{
        res.send(resp)
    });
}); 

router.delete("/api/todos/:id", async (req, res) => {
    const _id = req.params.id;
    await Todo.findByIdAndDelete({ _id }).then(()=>res.sendStatus(200))
});

router.put("/api/todos/:id", async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    await Todo.updateOne({_id}, body).then(()=>res.sendStatus(200));
});

module.exports = router;