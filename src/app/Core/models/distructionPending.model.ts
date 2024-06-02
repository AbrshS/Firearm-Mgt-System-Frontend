export interface DistrictionPending {
    id: number;
    destructionDate: Date;
    destructionRequestedBy: string;
    reasonForDestruction: string;
    authorizedBy: string;
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
    authorizationDate: Date;
    dateDestroyed: Date;
    holder: string;
  }
  