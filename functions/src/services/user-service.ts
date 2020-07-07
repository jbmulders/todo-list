import * as admin from 'firebase-admin';
import * as axios from 'axios';
import { CallableContext } from 'firebase-functions/lib/providers/https';

export class UserService {
  constructor(
    private firestore: admin.firestore.Firestore,
    private http: axios.AxiosStatic,
  ) {
    firestore.settings({ timestampsInSnapshots: true });
    this.http.post('', {}, { responseType: 'blob' });
  }
  /**
   * Example FCF Handler
   * @param data
   * @param context
   */
  public async getUserData(
    data: IRequestData,
    context: CallableContext,
  ): Promise<FirebaseFirestore.WriteResult | undefined> {
    let result: FirebaseFirestore.WriteResult | undefined;

    if (context.auth?.token) {
      const httpsResp = await this.doRequest(data);
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
    context: CallableContext,
  ): Promise<axios.AxiosResponse<IResponseData> | undefined> {
    let result: axios.AxiosResponse<IResponseData> | undefined;

    if (context.auth?.token) {
      result = await this.doRequest(data);
    }

    return result;
  }

  // MOCK: do a request...
  private async doRequest(
    data: IRequestData,
  ): Promise<axios.AxiosResponse<IResponseData>> {
    return this.http.post<IResponseData>('/function', { uid: '123' });
  }

  // MOCK: Write data to Firestore...
  private writeUserDataToFirestore(
    userData: IResponseData,
  ): Promise<FirebaseFirestore.WriteResult> {
    return this.firestore
      .collection('userdata')
      .doc(userData.uid)
      .set(userData);
  }
}

// TODO: specify what the request / response looks like,
// depends on what data you want to pass to the Cloud Function from the Angular App
// and on what you receive from the backend server
interface IRequestData {
  [key: string]: any;
}
interface IResponseData {
  [key: string]: any;
}
