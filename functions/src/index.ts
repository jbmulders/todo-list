import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import axios from 'axios';

import { UserService } from './services/user-service';
import { WebPaymentService } from './services/web-payment-service';

admin.initializeApp();
axios.defaults.baseURL = 'https://some.endpoint.com';
axios.defaults.headers.post['content-type'] = 'application/json';

const REGION = 'europe-west2'; //London

const userService = new UserService(admin.firestore(), axios);
const webPaymentService = new WebPaymentService(admin.firestore());

/**
 * UserService
 */

export const getUserDataEx = functions
  .region(REGION)
  .https.onCall(userService.getUserData.bind(userService));

export const registerUserEx = functions
  .region(REGION)
  .https.onCall(userService.registerUser.bind(userService));

/**
 * WebPaymentService
 */

export const updateWebPaymentsEx = functions
  .region(REGION)
  .https.onRequest(webPaymentService.onRequest.bind(webPaymentService));

// const widgets = [
//   {
//     title: 'Temp & Light',
//     values: [
//       { label: 'Artificial', value: '800', delta: 'up' },
//       { label: 'Natural', value: '700', delta: 'down' },
//     ],
//   },
//   {
//     title: 'CO2',
//     values: [{ label: '6214 used today', value: '1204pm', delta: 'down' }],
//     graphData: {
//       type: 'line',
//       additionalData: {},
//     },
//   },
//   {
//     title: 'Humidity',
//     values: [{ label: 'Natural', value: '60%', delta: 'up' }],
//   },
// ];

// export interface IWidgetValue {
//   label: string;
//   value: string;
//   delta?: 'up' | 'down' | 'none';
// }
// export interface IWidget {
//   title: string;
//   values: IWidgetValue[];
//   scale?: 'hour' | 'day';
//   graphData?: any;
// }
