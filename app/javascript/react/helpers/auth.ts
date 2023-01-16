import { ISession } from "../interfaces/authInterfaces";

export const localSessionNames = {
  session: "session",
};

export function saveSession(session: ISession) {
  localStorage.setItem(localSessionNames.session, JSON.stringify(session));
}

export function readSession() {
  const session: string | null = localStorage.getItem(
    localSessionNames.session
  );
  if (session) {
    return JSON.parse(session);
  }
  return session;
}

export function removeSession() {
  localStorage.removeItem(localSessionNames.session);
}
