import express from 'express';
import path from 'path';
const app = express();

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3000;

app.use(express.static(path.normalize(__dirname + '/build')));
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
