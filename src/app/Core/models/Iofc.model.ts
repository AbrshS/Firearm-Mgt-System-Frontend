export interface Iofc { 

    fullName: string,
      candidateCountry: string,
      evidenceOfMedical: string,
      passportNo: string,
      reasonHeCame: string,
      comingDate: Date, 

      countryOfResidence: string,
      region:	string,
      subcity:	string,
      district:	string,
      kebele:	string,
      specificArea:	string,
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
    registeredDate: Date
}