/* Defines the business entity */
export interface IBusiness {
  uUID: string;
  owningBusUnitID: string;
  modified: string;
  modifiedByID: string;
  created: number;
  createdByID: string;
  parentID: string;
  title: string;
  description: string;
  contactID: string;
}
