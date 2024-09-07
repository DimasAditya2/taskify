import 'dotenv/config'
const CONFIG = {
  db: process.env.MONGO_URI,
  JWT_PRIVATE: `${process.env.JWT_PRIVATE}`,
  JWT_PUBLIC: `${process.env.JWT_PUBLIC}`
}

export default CONFIG
