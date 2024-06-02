export interface LossPending {
    id: number;
    fullName: string;
    fpId: string;
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
    holder: string;
    additionalComment: string;
    reportedOn: Date;
    comment: string;
    dateLost: Date;
  }
  