import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// DEFAULTS
// TODO:
// - update to match request from 3rd party
// - import from a defaults file (?)
// - customize where needed
const requestDefaults = {
  hostname: 'mydomain.com',
  protocol: 'https',
  method: 'POST',
  headers: {
    auth: 'auth',
    contentType: 'content-type',
  },
  contentType: 'application/json',
  key: functions.config().echo.key,
};

const responseDefealts = {
  options: 'application-json',
  success: { message: 'OK' },
  unauthorized: { message: 'Bad request' },
  error: { message: 'Internal error' },
};

const firestoreDefaults = {
  collection: 'EchoResponses',
};

export class EchoService {
  constructor(private firestore: admin.firestore.Firestore) {}

  /*
   * EXAMPLE FCF http onRequest handler
   */
  public async onRequest(
    request: functions.https.Request,
    response: functions.Response,
  ): Promise<void> {
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

  private validateMainRequest(req: functions.https.Request): boolean {
    return (
      req.get('content-type') === requestDefaults.contentType &&
      req.get('auth') === requestDefaults.key
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
      'Access-Control-Allow-Origin',
      `${requestDefaults.protocol}://${requestDefaults.hostname}`,
    );
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
   * Customize where needed
   */
  private updateFirestore(
    data: IDocumentData,
  ): Promise<FirebaseFirestore.DocumentReference> {
    return this.firestore.collection(firestoreDefaults.collection).add(data);
  }
}

// TODO: specify what the document data will look like / change of this interfaec to something more meaningful
interface IDocumentData {
  [key: string]: any;
}
