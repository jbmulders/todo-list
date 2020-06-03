import * as admin from 'firebase-admin';
import { CallableContext } from 'firebase-functions/lib/providers/https';

export class UserService {
  constructor(private firestore: admin.firestore.Firestore) {
    firestore.settings({ timestampsInSnapshots: true });
  }
  /**
   * Example FCF Handler
   * @param data
   * @param context
   */
  public async getUserData(
    data: IRequestData,
    context: CallableContext
  ): Promise<any> {
    let result: any;

    if (context.auth?.token) {
      const httpsResp = await this.doRequest();
      result = await this.writeUserDataToFirestore(httpsResp.data);
    }

    return result;
  }

  /**
   * Example FCF Handler
   * @param data
   * @param context
   */
  public async registerUser(
    data: IRequestData,
    context: CallableContext
  ): Promise<any> {
    let result: any;

    if (context.auth?.token) {
      result = await this.doRequest();
    }

    return result;
  }

  // MOCK: do a request...
  private async doRequest(): Promise<any> {
    return {
      response: 'hello',
      data: {
        uid: '123',
      },
    };
  }

  // MOCK: Write data to Firestore...
  private writeUserDataToFirestore(
    userData: any
  ): Promise<FirebaseFirestore.WriteResult> {
    return this.firestore
      .collection('userdata')
      .doc(userData.uid)
      .set(userData);
  }
}

// TODO: specify what the request looks like, depends on what data you want to pass to the Cloud Function from the Angular App
interface IRequestData {
  [key: string]: any;
}
