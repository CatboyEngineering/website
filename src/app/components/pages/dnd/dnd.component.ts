import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdventureStep } from '../../../models/AdventureStep.interface';

@Component({
  selector: 'app-dnd',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dnd.component.html',
  styleUrl: './dnd.component.css'
})
export class DndComponent {
  initialStep: AdventureStep = {
    stepID: 'initial_step',
    label:
      'While you were browsing the web, a pack of goblins interrupted your journey, and they look hostile! One of them snorts and looks at you, raising a crude slingshot. What do you do?',
    buttons: [
      {
        label: 'Raise a shield',
        actionID: '1_raise_shield'
      },
      {
        label: 'Run away',
        actionID: '1_run_away'
      }
    ]
  };

  steps: AdventureStep[];
  unlockedSteps: AdventureStep[];

  constructor() {
    this.steps = [];
    this.unlockedSteps = [];

    this.unlockedSteps.push(this.initialStep);

    this.prepareSteps();
  }

  advanceStep(currentStep: AdventureStep, actionID: string) {
    var nextStep = this.steps.find(s => s.stepID === actionID);

    if (nextStep) {
      currentStep.buttons = [];
      this.unlockedSteps.push(nextStep);
    }
  }

  private prepareSteps() {
    this.steps.push({
      stepID: '1_raise_shield',
      label: "You raise a shield! The goblin's attack bounces off the metal.",
      buttons: []
    });

    this.steps.push({
      stepID: '1_run_away',
      label: 'You run away! The goblins chase you. You are dead.',
      buttons: []
    });
  }
}
