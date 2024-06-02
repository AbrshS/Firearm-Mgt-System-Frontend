export interface RecoverPending {
    id: number;
    firearmReturnedTo: string;
    reportedBy: string;
    authorizedBy: string;
    authorizedDate: Date;
    reasonToReturn: string;
    status: string;
    manufacturerSerial: string;
    isFirearm: boolean;
    dateMarked: Date;
    markedBy: string;
    firearmType: string;
    firearmModel: string;
    firearmMechanism: string;
    firearmCalibre: string;
    magazineCapacity: string;
    manufacturer: string;
    yearManufacture: Date;
    source: string;
    store: string;
    additionalComment: string;
  }
  