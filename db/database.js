import mongoose from "mongoose";

const Connection = async () => {
  const URL ="mongodb+srv://aqeebtasadaq75:Tensports%4010@cluster0.qwdtaub.mongodb.net/?retryWrites=true&w=majority";
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error Occur", error);
  }
};
export default Connection;
