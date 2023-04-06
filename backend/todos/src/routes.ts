import express from "express";
const router = express.Router();
import { Request, Response } from "express";
import { body, validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';

interface Todo {
  id: string
	title: string;
	done: boolean;
}

const todos = new Map<string, Todo>();

router.get("/todo/:id", (req: Request, res: Response): void => {
	res.status(200).send(todos.get(req.params.id));
});

router.get("/todos", (req: Request, res: Response) => {
  const allTodos: Todo[] = Array.from(todos.values())
  res.status(200).send(allTodos)
});

router.post(
  "/todo",
  body('title').isLength({ min: 2 }),
  body('done').isBoolean(),
  function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = uuidv4();
    const todo:Todo = {
      id: id,
      title: req.body.title,
      done: req.body.done
    }
    todos.set(id, todo)
    res.status(201).send(todo);
  }
);

router.patch("/todo", function(req: Request, res: Response){
  console.log(req.body)
  todos.set(req.body.id, req.body)
  res.status(200).send(req.body)
})

router.delete("/todo/:id", function(req: Request, res: Response) {
  todos.delete(req.params.id);
  res.status(200).send();
})

export default router;
