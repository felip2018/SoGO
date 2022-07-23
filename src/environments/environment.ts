// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const MAIN_SERVER = 'http://localhost:4000';

export const ACTIONS = {
  GET_DATA: `${MAIN_SERVER}/maintenance-data/select`,
  UPDATE_DATA: `${MAIN_SERVER}/maintenance-data/update`,
  SAVE_DATA: `${MAIN_SERVER}/maintenance-data/save`,
}
