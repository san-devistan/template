# useStep
Custom hook that manages and navigates between steps in a multi-step process.
## Usage
```
import { useStep } from 'usehooks-ts'

export default function Component() {
  const [currentStep, helpers] = useStep(5)

  const {
    canGoToPrevStep,
    canGoToNextStep,
    goToNextStep,
    goToPrevStep,
    reset,
    setStep,
  } = helpers

  return (
    <>
      <p>Current step is {currentStep}</p>
      <p>Can go to previous step {canGoToPrevStep ? 'yes' : 'no'}</p>
      <p>Can go to next step {canGoToNextStep ? 'yes' : 'no'}</p>
      <button onClick={goToNextStep}>Go to next step</button>
      <button onClick={goToPrevStep}>Go to previous step</button>
      <button onClick={reset}>Reset</button>
      <button
        onClick={() => {
          setStep(3)
        }}
      >
        Set to step 3
      </button>
    </>
  )
}
```
## API
▸ useStep ( maxStep ): [ number , UseStepActions ]
Custom hook that manages and navigates between steps in a multi-step process.
#### Parameters
| Name | Type | Description |
| --- | --- | --- |
| maxStep | number | The maximum step in the process. |
#### Returns
[ number , UseStepActions ]
An tuple containing the current step and helper functions for navigating steps.
### Type aliases
Ƭ UseStepActions : Object
Represents the second element of the output of the useStep hook.
#### Type declaration
| Name | Type | Description |
| --- | --- | --- |
| canGoToNextStep | boolean | Check if the next step is available. |
| canGoToPrevStep | boolean | Check if the previous step is available. |
| goToNextStep | () => void | Go to the next step in the process. |
| goToPrevStep | () => void | Go to the previous step in the process. |
| reset | () => void | Reset the step to the initial step. |
| setStep | Dispatch < SetStateAction < number >> | Set the current step to a specific value. |
## Hook
```
import { useCallback, useState } from 'react'

import type { Dispatch, SetStateAction } from 'react'

type UseStepActions = {
  goToNextStep: () => void
  goToPrevStep: () => void
  reset: () => void
  canGoToNextStep: boolean
  canGoToPrevStep: boolean
  setStep: Dispatch<SetStateAction<number>>
}

type SetStepCallbackType = (step: number | ((step: number) => number)) => void

export function useStep(maxStep: number): [number, UseStepActions] {
  const [currentStep, setCurrentStep] = useState(1)

  const canGoToNextStep = currentStep + 1 <= maxStep
  const canGoToPrevStep = currentStep - 1 > 0

  const setStep = useCallback<SetStepCallbackType>(
    step => {
      // Allow value to be a function so we have the same API as useState
      const newStep = step instanceof Function ? step(currentStep) : step

      if (newStep >= 1 && newStep <= maxStep) {
        setCurrentStep(newStep)
        return
      }

      throw new Error('Step not valid')
    },
    [maxStep, currentStep],
  )

  const goToNextStep = useCallback(() => {
    if (canGoToNextStep) {
      setCurrentStep(step => step + 1)
    }
  }, [canGoToNextStep])

  const goToPrevStep = useCallback(() => {
    if (canGoToPrevStep) {
      setCurrentStep(step => step - 1)
    }
  }, [canGoToPrevStep])

  const reset = useCallback(() => {
    setCurrentStep(1)
  }, [])

  return [
    currentStep,
    {
      goToNextStep,
      goToPrevStep,
      canGoToNextStep,
      canGoToPrevStep,
      setStep,
      reset,
    },
  ]
}
```