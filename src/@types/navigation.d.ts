import { IStatsDataProps } from "../screens/Home"
import { IMealProps } from "../services/storage"

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      stats: {
        stats: IStatsDataProps | null
      }
      new: {
        item: IMealProps | undefined
      },
      feedback: {
        selection: string | null
      },
      details: {
        item: IMealProps
      }
    }
  }
}