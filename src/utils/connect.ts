import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    logger.info("Database Connected");
  } catch (error) {
    logger.error("Could not connect to db");
    //  for when unhandled fatal exceptions occur
    //  that was not handled by the domain
    process.exit(1);
  }
}

export default connect;
