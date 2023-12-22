import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_DB_URL + process.env.DB_NAME
    ); //|| 'mongodb://localhost:27017/vigorAssement')
    console.log(
      `MongoDB connected: ${conn.connection.host}:${conn.connection.port}/${conn.connection.name}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
