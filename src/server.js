import express from 'express';
import { syncDB } from './models/index.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Task Tracker Lite API running 🚀'));

syncDB(); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
