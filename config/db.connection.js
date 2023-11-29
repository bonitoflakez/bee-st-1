import mongoose from "mongoose";

const uri =
  "mongodb+srv://beest1:beest1@bee-st-1.fwnzgz7.mongodb.net/?retryWrites=true&w=majority";

const connect_db = async () => {
  try {
    const connection = await mongoose.connect(uri);
    console.log(
      `Connected to MongoDB on host -> ${connection.connection.host}`
    );
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export { connect_db };
