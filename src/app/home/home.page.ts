import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Contacts } from '@capacitor-community/contacts';
import { Observable, from , map ,of} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IContact } from 'src/interfaces/IContact';
import IPermission from 'src/interfaces/IPermission';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{
  contacts: any = [];
  scannedResult: any;
  statusScan: string = '';

  constructor() {}

  ngOnInit(): void {
    this.getContacts().subscribe(
      (contacts) => {
        this.contacts = contacts;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnDestroy(): void {
      this.stop()
  }


  getContacts(): Observable<IContact[]> {
    return from(Contacts.requestPermissions()).pipe(
      switchMap((permission: IPermission) => {
        if (!permission || permission.contacts !== 'granted') {
          return of([]);
        }
        
        return from(Contacts.getContacts({projection: { name: true, phones: true } })).pipe(
          map((allContacts: any) => {
            return allContacts.contacts.map((contact: IContact) => ({
              contact: contact
            }));
          })
        );
      })
    );
  }
//@ts-ignore
  async checkPermission () {
    try {
      const permission = await BarcodeScanner.checkPermission({force: true})
      if(permission.granted) {
        return true
      } else {
        return false
      }
      
    } catch (error) {
      alert(error)
      console.log(error)
    }
  }

  async startScan () {
    try {
      const permission = await this.checkPermission();
      if(!permission) {return}
      await BarcodeScanner.hideBackground();
      document.querySelector('body')?.classList.add('scanner-active');
      this.statusScan = 'hidden';
      const scannedData = await BarcodeScanner.startScan();
      BarcodeScanner.showBackground();
      document.querySelector('body')?.classList.remove('scanner-active');
      this.statusScan = '';
      if(scannedData?.hasContent){
        this.scannedResult = scannedData.content
        alert(scannedData.content)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async stop(){
    BarcodeScanner.showBackground()
    BarcodeScanner.stopScan()
    document.querySelector('body')?.classList.remove('scanner-active');
    this.statusScan = '';
  }  
}
