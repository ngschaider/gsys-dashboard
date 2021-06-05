export const isOfType = <T>(varToBeChecked: any, propertyToCheckFor: keyof T): varToBeChecked is T => {
  return (varToBeChecked as T)[propertyToCheckFor] !== undefined;
}