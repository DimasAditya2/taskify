import { taskModel } from "../models/task.model";
import { logger } from "../utils/logger";

export const    getTasks = async () => {
    try {
        const data = await taskModel.find()
        return data
    } catch (error) {
        logger.info('Error cannot get all data', error)
        return null
    }
}