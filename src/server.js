const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  const userId = 'garima_raj_15032003'; // Example user ID, replace with dynamic generation if needed
  const email = 'garima@xyz.com'; // Replace with actual email
  const rollNumber = 'VIT123456'; // Replace with actual roll number

  if (!Array.isArray(data)) {
    return res.status(400).json({ is_success: false, error: 'Invalid input' });
  }

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item) && isNaN(item.charCodeAt(0)));
  const highestLowercaseAlphabet = alphabets.filter(item => item === item.toLowerCase()).sort().slice(-1);

  return res.status(200).json({
    is_success: true,
    user_id: userId,
    email,
    roll_number: rollNumber,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet,
  });
});

app.get('/bfhl', (req, res) => {
  return res.status(200).json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
