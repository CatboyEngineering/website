export interface AdventureStep {
  stepID: string;
  label: string;
  buttons: {
    label: string;
    actionID: string;
  }[];
}
