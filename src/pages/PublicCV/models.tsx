import { UserData } from 'models/user.models';

export type PublicUserData = UserData & { _id: string };
export type PublicUserDataState = { hasError: false; user?: PublicUserData } | { hasError: true; errorMessage: string };
