import mongoose from "mongoose";
import configKeys from '../../../config';
mongoose.set('strictQuery',true);
mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
      // if (!configKeys.MONGO_DB_URL) {
      //   throw new Error("MongoDB URL is not defined in configKeys");
      // }
      await mongoose.connect('mongodb+srv://henrysathyan:henry123@truespace.0dvmc8w.mongodb.net/', {});
      console.log(`Database connected successfully`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  export default connectDB;