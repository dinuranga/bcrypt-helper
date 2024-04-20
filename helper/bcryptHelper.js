import bcrypt from 'bcrypt'

// Function to hash a password
const hashPassword = async (plainTextPassword, saltRounds) => {
    try {
        // Generate a salt with the specified number of rounds
        const salt = await bcrypt.genSalt(saltRounds);
        // Hash the plain text password using the generated salt
        const hashedPassword = await bcrypt.hash(plainTextPassword, salt);
        // Return the hashed password
        return hashedPassword;
    } catch (error) {
        // If an error occurs during the hashing process, throw the error
        throw error;
    }
}

// Function to compare a plain text password with a hashed password
const comparePassword = async (plainTextPassword, hashedPassword) => {
    try {
        // Compare the plain text password with the hashed password
        const match = await bcrypt.compare(plainTextPassword, hashedPassword);
        // Return true if the passwords match, false otherwise
        return match;
    } catch (error) {
        // If an error occurs during the comparison process, throw the error
        throw error;
    }
}

// Export the hashPassword and comparePassword functions
export {
    hashPassword,
    comparePassword
}
