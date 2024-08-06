import express from "express"
import path from "path"
import bodyParser from "body-parser"
import blogRoutes from "./routes/blogroutes.js"

const app = express();
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use('/', blogRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });