// Update your Firearm type or interface to include missing properties
export interface Firearm { 
    firearmSourceCount: number;
    count: number; 
    id: number;
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
    selected?: boolean;
    firearmReturnedTo: string; 
    reportedBy: string;
    authorizedBy: string;
    authorizedDate: string;
    reasonToReturn: string;
    status: string; 

  }
  