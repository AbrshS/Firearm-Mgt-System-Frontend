export interface Destroyed {
    destructionDate:Date,
    destructionRequestedBy: string, 
    reasonForDestruction: string, 
    authorizedBy: string,   


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
    status: string;  
    
}