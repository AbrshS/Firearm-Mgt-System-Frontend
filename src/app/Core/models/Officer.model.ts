export interface Officer {
    id: number;
    fullName: string;
    fpId: string;
    title: string;
    position: string;
    email: string;
    phoneNumber: string;
    description: string;
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
    registeredPosition: string;
    registeredFullName: string;
    registeredTitle: string;
    registeredEmail: string;
    registeredSignature: string;
    registeredDate: Date;
    registeredBodyFullName: string;
    registeredBodyResponsibility: string;
    registeredBodySignature: string;
    registeredBodyDate: Date;
}
