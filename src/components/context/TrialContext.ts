import React from "react";

type trialData = [string | undefined, (trial: string | undefined) => void];

export const TrialDataContext = React.createContext<trialData>(["", () => ({})]);