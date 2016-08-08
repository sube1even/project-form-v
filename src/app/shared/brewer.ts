export class Brewer {
  id: number;
  name: string;
  status: string;
  currentBrewId: number;
  serialNumber: number;

  constructor (
    id: number,
    name: string,
    status: string,
    currentBrewId: number,
    serialNumber: number) {
      this.id = id;
      this.name = name;
      this.status = status;
      this.currentBrewId = currentBrewId;
      this.serialNumber = serialNumber;

  }
}


// currentBrewId:207
// id:93
// name:"R2Beer2"
// serialNumber:"01010100001362"
// status:"brew"