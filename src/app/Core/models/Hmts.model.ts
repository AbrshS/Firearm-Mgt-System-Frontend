export interface Hmts {
    countryOfOrigin: string,
          licensedCountry:	string,
          levelOfService: string, 
      
          subcity:	string,
          district:	string,
          kebele:	string,
          specificArea:	string,
          passportNo:	string,
          phoneNumber:	string,
          email: string, 
          //firearm Detail  
      manufacturerSerial: string,
      isFirearm: boolean,
      dateMarked: Date,
      markedBy: string,
      firearmType: string,
      firearmModel: string,
      firearmMechanism: string,
      firearmCalibre: string,
      magazineCapacity: string,
      manufacturer: string,
      yearManufacture: Date,
      source: string,
      store: string,
      additionalComment: string,
      //the body who registed the weapon 
      registeredBodyFullName: string,
      registeredBodyPosition: string,
      registeredBodyResponsibility: string,
      registeredBodySignature: string,
      registeredBodyDate: Date,
      //the registered body 
      registeredPosition: string,
      registeredFullName: string,
      registeredTitle: string,
      registeredResponsibility: string,
      registeredSignature: string,
}