export interface Civillian { 
    id: number;
    Fullname: string,
    Nationality: string,
    Age: string,
    sex: string,
    acadamicStatus: string,
    maritialStatus: string,
    medicalStatus: string,
    occupation: string,
    sizeOfCapital: string,
    Region: string,
    zone: string,
    District: string,
    kebele: string,
    specificArea: string,
    passportid: string,
    phone_number: string,
    home_number: string, 

    assignedSerial: string;
    firearmType: string;
    firearmModel: string;
    manufacturer: string;
    firearmCalibre: string;
    yearManufacture: Date;
    source: string;
    manufacturerSerial: string;
    markedBy: string;
    store: string;
    dateMarked: Date;
    isFire: boolean; 
    firearmMechanism: string;
    magazineCapacity: string;
    additionalComment: string;

    registeredPosition: string,
    registeredPositionFullName: string,
    registeredTitle: string,
    registeredResponsibility: string,
    registeredSignature: string,
    registeredDate: Date, 
  
    registeredBodyFullName: string,
    registeredBodyResponsibility: string,
    registeredBodySignature: string,
    registeredBodyDate: Date, 

}