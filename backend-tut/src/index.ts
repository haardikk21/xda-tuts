import express from "express";

const app = express();

app.use(express.json());

interface Item {
  id: number;
  name: string;
  price: number;
}

var items: Item[] = [
  {
    id: 1,
    name: "Dairy Milk",
    price: 20,
  },
  {
    id: 2,
    name: "Lays",
    price: 10,
  },
];

app.get("/items", (req: express.Request, res: express.Response) => {
  res.json(items);
});

app.post("/items", (req: express.Request, res: express.Response) => {
  const item: Item = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
  };
  items.push(item);
  res.sendStatus(200);
});

app.delete("/items/:id", (req: express.Request, res: express.Response) => {
  const id = parseInt(req.params.id);
  items = items.filter((item) => {
    return item.id != id;
  });
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
