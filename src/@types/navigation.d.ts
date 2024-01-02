import { IMealProps } from "../services/storage"

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      stats: {
        target: number
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