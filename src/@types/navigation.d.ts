import { IMealProps } from "../services/storage"

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      stats: {
        target: number
      }
      new: undefined,
      feedback: {
        selection: string | null
      },
      details: {
        item: IMealProps
      }
    }
  }
}