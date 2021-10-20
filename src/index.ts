import app from './app';
import dotenv from 'dotenv';

// using environments
dotenv.config();

const port = process.env.PORT || 8000;

<<<<<<< HEAD
app.listen( port, () => {
=======
app.listen(port, () => {
>>>>>>> d2d09642cd1861abc295dc100113be1ce5bb2088
  console.log(`listening on port ${port}`);
});