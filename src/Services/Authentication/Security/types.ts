export type TEncryptIVObject = {
  iv: string;
  encrypted: string;
};

export type TJwt = {
  iv: string;
  encrypted: string;
  iat: number;
  exp: number;
};
