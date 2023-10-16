import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contacts } from '@capacitor-community/contacts';
import { IContact } from 'src/interfaces/IContact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})
export class ContactDetailsPage implements OnInit {
  contactInfo: any = {}
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('contactId');
    this.getContactInfo(contactId!);
  }

  async getContactInfo(contactId: string) {
    try {
      const contact = await Contacts.getContact({contactId: contactId, projection:{name:true, phones: true, emails: true, organization: true, birthday: true, postalAddresses: true}});
      this.contactInfo = {
        name: contact.contact.name?.given,
        phones: contact.contact.phones,
        emails: contact.contact.emails,
        organisation: contact.contact.organization
      };
    } catch (error) {
      console.error(error);
    }
  }
}
