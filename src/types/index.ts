export interface WorkflowInput {
  keyboard: string;
  daw: string;
  controller: string;
  useCase: string;
}

export interface WorkflowSuggestions {
  midiRouting: string[];
  controllerMapping: string[];
  patchOrganization: string[];
  layerSuggestions: string[];
  transitionRecommendations: string[];
  performanceTips: string[];
}
