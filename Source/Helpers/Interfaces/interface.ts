export interface FirebaseError extends Error {
  code: string | number;
  message: string;
}
