import { useState } from "react"
import { RBOption } from "./RadioButton"

export const useRadioButton = () => {
  const [radioValue, setRadioValue] = useState<string>('yes')

  const onRadioValueChange = (nextOption: RBOption) => {
    setRadioValue(nextOption.value)
  }

  return { radioValue, onRadioValueChange }
}
