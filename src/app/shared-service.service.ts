import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private transferredDataSubject = new BehaviorSubject<any[]>([]);
  transferredData$: Observable<any[]> = this.transferredDataSubject.asObservable();

  transferData(data: any) {
    const currentTransferredData = this.transferredDataSubject.getValue();
    const updatedTransferredData = [...currentTransferredData, data];
    this.transferredDataSubject.next(updatedTransferredData);
  }
}
