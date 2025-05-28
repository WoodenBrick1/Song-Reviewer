const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt'); 

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'songreviewer'
});

app.get('/', (req, res) => {
    return res.json("From Backend Side");
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Missing fields' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        db.query(sql, [name, email, hashedPassword], (err, result) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ error: 'Database error' });
            }
            return res.status(200).json({ message: 'User registered successfully' });
        });
    } catch (error) {
        console.error("Hashing error:", error);
        return res.status(500).json({ error: 'Error hashing password' });
    }
});


app.listen(8081, () => {
    console.log("listening");
});