// Actions that affect domains
/*0*/ type permission =
  | "CREATE"
  /*1*/
  | "LIST"
  /*2*/
  | "INDEX"
  /*3*/
  | "EDIT"
  /*4*/
  | "DELETE"
  /*5*/
  | "SUPER";

export type permissions = [
  /*1*/ permission?,
  /*2*/ permission?,
  /*3*/ permission?,
  /*4*/ permission?,
  /*5*/ permission?
];

// STUFF is a system domain of application's domain
/*0*/ type stuff =
  | "USER"
  /*1*/
  | "MACHINES"
  /*2*/
  | "LINKS"
  /*3*/
  | "MESSAGES"
  /*4*/
  | "QUEUE"
  /*5*/
  | "SUPER";

export type stuffies = [
  /*1*/ stuff?,
  /*2*/ stuff?,
  /*3*/ stuff?,
  /*4*/ stuff?,
  /*5*/ stuff?
];
export default () => {
  throw new Error("");
};

export type TSP = [stuff, permission[]][]
