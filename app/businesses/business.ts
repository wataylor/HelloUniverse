/* Defines the business entity */
export interface IBusiness {
  uUID: string;
  owningBusUnitID: string;
  modified: string;
  modifiedByID: string;
  created: number;
  createdByID: string;
  businessUnitParentID: string;
  businessUnitTitle: string;
  businessUnitDescription: string;
  businessUnitContactID: string;
}
