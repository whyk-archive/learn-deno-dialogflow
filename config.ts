export interface Response {
  fulfillmentText?: string;
  fulfillmentMessages?: [
    {
      payload: {
        richContent: [
          {
            type: string;
            title: string;
            subtitle: string;
            text: string;
          }[]
        ];
      };
    }
  ];
}

interface Parameters {
  name: string;
}

export interface QueryResult {
  queryText: string;
  action: string;
  parameters: Parameters;
  allRequiredParamsPresent: boolean;
  fulfillmentText: string;
  fulfillmentMessages: [
    {
      text: {
        text: [];
      };
    }
  ];
  outputContexts: [
    {
      name: string;
      lifespanCount: number;
      parameters: {
        "no-input": number;
        "no-match": number;
      };
    }
  ];
  intent: {
    name: string;
    displayName: string;
    isFallback: boolean;
  };
  intentDetectionConfidence: number;
  languageCode: string;
}

export interface BookItems {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publishedDate: string;
    description: string;
    industryIdentifiers: [
      {
        type: string;
        identifier: number;
      },
      {
        type: string;
        identifier: number;
      }
    ];
    readingModes: {
      text: boolean;
      image: boolean;
    };
    pageCount: number;
    printType: string;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice: {
      amount: number;
      currencyCode: string;
    };
    retailPrice: {
      amount: number;
      currencyCode: string;
    };
    buyLink: string;
  };
  accessInfo: {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: {
      isAvailable: boolean;
    };
    pdf: {
      isAvailable: boolean;
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  };
  searchInfo: {
    textSnippet: string;
  };
}
