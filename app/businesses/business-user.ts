/* Defines the business entity with data added for details about the users */
export interface IBusinessUser {
  uUID: string;
  owningBusUnitID: string;
  modified: string;
  modifiedByID: string;
  created: number;
  createdByID: string;
  parentID: string;
  title: string;
  description: string;
  assigneeID: string;
  assigedByID: string;

  umSalutation: string;
  umFirstName: string;
  umMiddlename: string;
  umLastName: string;
  umSuffix: string;
  umPhone: string;
  umEmail: string;
  ucSalutation: string;
  ucFirstName: string;
  ucMiddlename: string;
  ucLastName: string;
  ucSuffix: string;
  ucPhone: string;
  ucEmail: string;
  aeSalutation: string;
  aeFirstName: string;
  aeMiddlename: string;
  aeLastName: string;
  aeSuffix: string;
  aePhone: string;
  aeEmail: string;
  abSalutation: string;
  abFirstName: string;
  abMiddlename: string;
  abLastName: string;
  abSuffix: string;
  abPhone: string;
  abEmail: string;

}
