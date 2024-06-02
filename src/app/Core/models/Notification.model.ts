export interface Notification {
    id: number;
    store: string; // Ensure this matches the property name in your API response
    holder: string; // Ensure this matches the property name in your API response
    isRead: boolean; // Make sure this is defined if it's part of the API response
    sentDate: Date; 
  }
  