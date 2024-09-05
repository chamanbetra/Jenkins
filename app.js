import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Jenkins CI/CD with Node.js!');
});

app.get('/route', (req, res) => {
    res.send('Hello to the second route');
})

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});

export default app;

