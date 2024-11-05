// api/index.js
export default function handler(req: any, res: any) {
  const { method, url } = req;

  // Routing based on the URL path
  if (url === "/posts") {
    switch (method) {
      case "GET":
        // Logic to retrieve posts
        const posts = [
          { id: 1, title: "First Post", content: "This is the first post." },
          { id: 2, title: "Second Post", content: "This is the second post." },
        ];
        return res.status(200).json(posts);

      case "POST":
        // Logic to create a new post
        const newPost = req.body; // Assuming the post data is sent in the request body
        return res
          .status(201)
          .json({ message: "Post created!", post: newPost });

      default:
        res.setHeader("Allow", ["GET", "POST"]);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  } else {
    // Handle other requests (like the root endpoint)
    switch (method) {
      case "GET":
        // Logic for the root API endpoint
        return res.status(200).json({ message: `Welcome to the API!` });
      default:
        res.setHeader("Allow", ["GET"]);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
}
