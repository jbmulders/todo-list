import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// DEFAULTS
// TODO:
// - update to match request from 3rd party
// - import from a defaults file (??)
// - customize where needed
const requestDefaults = {
  protocol: 'https',
  allowOrigins: ['http://origin1', 'http://origin2'],
  method: 'POST',
  headers: {
    auth: 'auth',
    contentType: 'content-type',
  },
  contentType: 'application/json',
  key: functions.config().echo.key,
};
const responseDefealts = {
  options: '',
  success: { message: 'OK' },
  unauthorized: { message: 'Bad request' },
  error: { message: 'Internal error' },
};
const firestoreDefaults = {
  collection: 'EchoResponses',
};

export class WebPaymentService {
  constructor(private firestore: admin.firestore.Firestore) {}

  /*
   * EXAMPLE FCF http onRequest handler
   */
  public async onRequest(
    request: functions.https.Request,
    response: functions.Response,
  ): Promise<void> {
    // set CORS header [as described in the docs]
    response.set('Access-Control-Allow-Origin', requestDefaults.allowOrigins);

    // check if the incoming request is:
    // - cors preflight (OPTIONS)
    // - main (POST)
    // If neither -> reject
    if (this.validatePreflightRequest(request)) {
      this.handlePreflightRequest(response);
    } else if (this.validateMainRequest(request)) {
      await this.handleMainRequest(request, response);
    } else {
      this.handleUnauthorizedRequest(response);
    }
  }

  /*
   * REQUEST VALIDATION
   * Customize where needed...
   */

  private validatePreflightRequest(req: functions.https.Request): boolean {
    return req.method === 'OPTIONS';
  }

  /**
   * TODO: optimize this based on the 3rd party request
   */
  private validateMainRequest(req: functions.https.Request): boolean {
    return (
      req.method === requestDefaults.method &&
      requestDefaults.allowOrigins.indexOf(
        `${req.protocol}://${req.hostname}`,
      ) > -1 &&
      req.protocol === requestDefaults.protocol &&
      req.get(requestDefaults.headers.contentType) ===
        requestDefaults.contentType &&
      req.get(requestDefaults.headers.auth) === requestDefaults.key
    );
  }

  /*
   * REQUEST HANDLING
   * Customize where needed...
   */

  private handlePreflightRequest(
    response: functions.Response,
  ): functions.Response {
    response.set(
      'Access-Control-Allow-Headers',
      Object.values(requestDefaults.headers),
    );
    response.set('Access-Control-Allow-Methods', requestDefaults.method);

    return response.status(204).send(responseDefealts.options);
  }

  private async handleMainRequest(
    request: functions.https.Request,
    response: functions.Response,
  ): Promise<functions.Response> {
    const requestData = request.body as IDocumentData;

    try {
      await this.updateFirestore(requestData);
      return response.status(200).send(responseDefealts.success);
    } catch (err) {
      return response.status(500).send(responseDefealts.error);
    }
  }

  private handleUnauthorizedRequest(
    response: functions.Response,
  ): functions.Response {
    return response.status(403).send(responseDefealts.unauthorized);
  }

  /*
   * UTILITIES
   * Customize where needed | maybe move this to a utilities class...
   */
  private updateFirestore(
    data: IDocumentData,
  ): Promise<FirebaseFirestore.DocumentReference> {
    return this.firestore.collection(firestoreDefaults.collection).add(data); // adds a record to the collection under a random ID
  }
}

// TODO: specify what the document data will look like / change of this interfaec to something more meaningful
interface IDocumentData {
  [key: string]: any;
}
