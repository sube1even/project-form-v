export class Brew {
  id: number;
  customName: string;
  isComplete: boolean;
  isAborted: boolean;

  
  constructor(
    id: number,
    customName: string,
    isComplete: boolean,
  isAborted: boolean) {
      this.id = id;
      this.customName = customName;
      this.isComplete = isComplete;
      this.isAborted = isAborted;
     

  }
}



// "id":207,
// "customName":"Bavarian Lager",
// "note":"",
// "brewTagId":47,
// "brewSequenceId":"2",
// "brewerFirmware":"P010",
// "dateCreated":"2016-07-19T08:01:01.000Z",
// "dateFinished":"2016-07-19T08:01:01.000Z",
// "type":"cus",
// "status":"brew",
// "isComplete":false,
// "isAborted":false,
// "eofTotalTests":6,
// "eofTotalIndications":0,
// "eofDetected":false,
// "eofInProgress":false,
// "eofShouldHide":false,
// "currentZone":2,
// "previousZone":1,
// "keggingTempDetected":false,
// "storageTempDetected":false,
// "brewManuallyStored":false,
// "brewFermentationIndexGreaterThan250":true,
// "brewerId":93,
// "userId":47,
// "recipeId":47
