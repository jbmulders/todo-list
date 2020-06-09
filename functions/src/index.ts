import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { UserService } from './services/user-service';
import { WebPaymentService } from './services/web-payment-service';

admin.initializeApp();

const REGION = 'europe-west2'; //London

const userService = new UserService(admin.firestore());
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
