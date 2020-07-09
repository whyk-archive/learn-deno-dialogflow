export interface Response {
  fulfillmentText: string
}

interface Parameters {
  name: string
}

export interface QueryResult {
  queryText: string
  action: string
  parameters: Parameters
  allRequiredParamsPresent: boolean
  fulfillmentText: string
  fulfillmentMessages: [
    {
      text: {
        text: []
      }
    }
  ]
  outputContexts: [
    {
      name: string
      lifespanCount: number
      parameters: {
        "no-input": number
        "no-match": number
      }
    }
  ]
  intent: {
    name: string
    displayName: string
    isFallback: boolean
  }
  intentDetectionConfidence: number
  languageCode: string
}