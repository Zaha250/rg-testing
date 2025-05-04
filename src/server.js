import express from 'express';
import {lkRouter} from "./routes/lkRoutes.js";
import {mobileRouter} from "./routes/mobileRoutes.js";

const app = express();
const PORT = process.env.PORT || 3005;

app.use('/lk', lkRouter);
app.use('/mobile', mobileRouter);

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});
