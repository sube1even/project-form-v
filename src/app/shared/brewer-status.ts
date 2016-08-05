export class BrewerStatus {
  id: number;
  recipeId: number;
  dateCreated: Date;
  status: Array<any>;
  eofDetected: boolean;
  currentZone: number;

  constructor(
    id: number,
    recipeId: number,
    dateCreated: Date,
    status: Array<any>,
    eofDetected: boolean,
    currentZone: number) {
    this.id = id;
    this.recipeId = recipeId;
    this.dateCreated = dateCreated;
    this.status = status;
    this.eofDetected = eofDetected;
    this.currentZone = currentZone;

  }
}

// "id": 207,
// "recipeId": 47,
// "brewerId": 93,
// "customName": "Bavarian Lager",
// "note": "",
// "dateCreated": "2016-07-19T08:01:01.000Z",
// "dateFinished": "2016-07-19T08:01:01.000Z",
// "type": "cus",
// "status": {
//     "tempAmbient": 187,
//     "tempBrew8L": 127,
//     "tempBrew2L": 129,
//     "flag": "inlimits"
// },
// "isComplete": false,
// "isAborted": false,
// "eofDetected": false,
// "eofInProgress": false,
// "currentZone": 2,
// "previousZone": 1,
// "profile": {
//     "zone1": 220,
//     "zone2": 120,
//     "zone3": 180,
//     "zone4": 40
// }
