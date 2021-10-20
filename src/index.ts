import app from './app';
import dotenv from 'dotenv';

// using environments
dotenv.config();

const port = process.env.PORT || 8000;

app.listen( port, () => {
  console.log(`listening on port ${port}`);
});