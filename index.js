import express from 'express';
import { hashPassword, comparePassword } from './helper/bcryptHelper.js' 

const app = express();
const port = 3000;

// Define salt rounds and plain text password
const saltRounds = 10;
const plainTextPassword = "1234";

// Hash the plain text password and compare with the hashed password
const hashedPassword = await hashPassword(plainTextPassword, saltRounds);
console.log("\nHashed Password :", hashedPassword);

const isMatched = await comparePassword(plainTextPassword, hashedPassword);
console.log("Match Status    :", isMatched,"\n");


app.get('/', async (req, res) => {
    // Hash a plain text password and compare with another hashed password
    const plainText = "1234";
    const hashedPass = await hashPassword(plainText, saltRounds);
    const isMatched = await comparePassword(plainText, hashedPass);

    // Comparison result
    if (isMatched) {
        res.status(200).send("Password is correct!");
    } else {
        res.status(401).send("Password is incorrect!");
    }
});

app.listen(port, () => console.log(`Server is running at port http://localhost:${port}`));
