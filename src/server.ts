import mongoose from 'mongoose';
import app from './app';
import config from './app/config/index';


async function main() {
  try {
    await mongoose.connect(config.DB_URL as string);
    
    app.listen(config.PORT, () => {
      console.log(`Example app listening on PORT ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main().catch((err) => console.log(err));

