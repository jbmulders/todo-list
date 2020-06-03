import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { UserService } from './services/user-service';
import { EchoService } from './services/echo-service';

admin.initializeApp();

const REGION = 'europe-west2'; //London

const userService = new UserService(admin.firestore());
const echoService = new EchoService(admin.firestore());

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
 * EchoService
 */

export const updateWebPaymentsEx = functions
  .region(REGION)
  .https.onRequest(echoService.onRequest.bind(echoService));
