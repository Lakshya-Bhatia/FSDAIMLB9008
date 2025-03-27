const express = require("express");
const fs = require("fs/promises");
const app = express();
const cors=require("cors");
const port = 3003;
let users = [];

// Load users from the JSON file
const loadusers = async () => {
    try {
        const usersData = await fs.readFile("./users.json", "utf-8");
        users = JSON.parse(usersData); // Parse JSON to an array
    } catch (err) {
        console.error("Error loading or parsing users data:", err);
        // If error in loading, start with an empty array
        users = [];
    }
};

// Save users to the JSON file
const saveUser = async () => {
    try {
        await fs.writeFile("./users.json", JSON.stringify(users, null, 2)); // Save as pretty-printed JSON
    } catch (err) {
        console.error("Error saving users:", err);
    }
};
app.use(cors({origin: "http://localhost:1573"
}));
app.use(express.json());

// Load users when the server starts
app.listen(port, async () => {
    console.log(`Server running on port ${port}`);
    await loadusers(); // Load users from file when the server starts
});

// Get all users
app.get("/users", async (req, res) => {
    try {
        const data = await fs.readFile("./users.json", "utf-8");
        res.status(200).json(JSON.parse(data)); // Send users as JSON response
    } catch (err) {
        res.status(400).send("File not found or invalid JSON format.");
    }
});

// Get a specific user by ID
app.get("/user/:id", (req, res) => {
    const uid = req.params.id;
    const index = users.findIndex(ind => ind.id == uid); // Use '==' for comparison
    if (index === -1) {
        res.status(400).json({ status: "fail", message: "No user with such ID" });
    } else {
        res.status(200).json({ status: "success", message: "User found", data: users[index] });
    }
});

// Create a new user
app.post("/createuser", async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ status: "fail", message: "Name and email are required" });
    }

    const newid = Date.now();
    const newuser = {
        id: newid,
        name,
        email
    };

    users.push(newuser); // Add the new user directly to the users array
    await saveUser(); // Save users to the file

    res.status(201).json({ status: "success", message: "User created successfully", data: newuser });
});

// Edit an existing user
app.patch("/edituser/:id", (req, res) => {
    const uid = req.params.id;
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ status: "fail", message: "Name and email are required" });
    }

    const index = users.findIndex(ind => ind.id == uid); // Use '==' for comparison
    if (index === -1) {
        res.status(400).json({ status: "fail", message: "No user with such ID" });
    } else {
        users[index].name = name;
        users[index].email = email;
        saveUser();
        res.status(200).json({ status: "success", message: "User edited successfully" });
    }
});

// Delete a user
app.delete("/deleteuser/:id", (req, res) => {
    const uid = req.params.id;
    const index = users.findIndex(ind => ind.id == uid); // Use '==' for comparison
    if (index === -1) {
        res.status(400).json({ status: "fail", message: "No user with such ID" });
    } else {
        const deldata = users.splice(index, 1); // Remove the user from the array
        saveUser();
        res.status(200).json({ status: "success", message: "User deleted successfully", deldata });
    }
});

// This middleware will catch malformed JSON and respond with an error message
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
        console.error("Malformed JSON", err);
        return res.status(400).json({ status: "fail", message: "Malformed JSON in request body" });
    }
    next(); // Proceed to other middleware if error is not SyntaxError
});
