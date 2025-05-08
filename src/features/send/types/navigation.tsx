export type RootStackParamList = {
    Onboarding: undefined;   // no params
    Exchange: undefined;   // no params
    Shop:       { userId: string }; // if Shop needed a param, e.g. userId
    Profile:    { userId: string; fromHome: boolean };
    Setup:      undefined;
  };