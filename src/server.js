import express from 'express';
import { syncDB } from './models/index.js';
import routes from "./routes/server.routes.js";

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Task Tracker Lite API running 🚀'));

syncDB(); 

app.use('/api',routes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
