//import useWindowSizes from "react-use-window-sizes"
import Confetti from 'react-confetti'
export function ConfettiComponent() {
  //const { width, height } = useWindowSizes()
  return (
    <Confetti style={{ width:'100%'}}
      numberOfPieces={580}
      gravity={0.03}
    />
  )
}