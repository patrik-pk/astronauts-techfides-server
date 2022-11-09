import mongoose from 'mongoose'

const mongoURI =
  'mongodb+srv://user1234:user1234@cluster0.kttfwlv.mongodb.net/?retryWrites=true&w=majority'

const connectDb = async () => {
  try {
    await mongoose.connect(mongoURI)
    console.log('MongoDB connected')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default connectDb
