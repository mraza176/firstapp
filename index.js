import express from "express";

const app = express();

app.use(express.json());

app.get("/api/books", (req, res) => {
  res.status(200).json({
    books: [
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
      },
      {
        title: "The Power of Now",
        author: "Eckhart Tolle",
      },
      {
        title: "The Art of War",
        author: "Sun Tzu",
      },
      {
        title: "The 48 Laws of Power",
        author: "Robert Greene",
      },
      {
        title: "The 4-Hour Workweek",
        author: "Tim Ferriss",
      },
    ],
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
