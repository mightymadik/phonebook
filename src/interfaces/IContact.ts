export interface IContact {
    id?: string;
    displayName?: string;
    name: {
      givenName?: string;
      middleName?: string;
      familyName?: string;
      honorificPrefix?: string;
      honorificSuffix?: string;
    };
    phones? : {};
    nickname?: string;
    phoneNumbers?: {
      value: string;
      type?: string;
      id?: string;
    }[];
    emails?: {
      value: string;
      type?: string;
      id?: string;
    }[];
    addresses?: {
      formatted?: string;
      streetAddress?: string;
      locality?: string;
      region?: string;
      postalCode?: string;
      country?: string;
      id?: string;
    }[];
    urls?: {
      value: string;
      type?: string;
      id?: string;
    }[];
    organizations?: {
      name: string;
      department?: string;
      title?: string;
      type?: string;
      id?: string;
    }[];
    birthday?: Date;
    note?: string;
    photos?: {
      value: string;
      type?: string;
      id?: string;
    }[];
    categories?: string[];
    ims?: {
      label: string;
      value: string;
    }[];
    events?: {
      label: string;
      value: Date;
    }[];
  }
  