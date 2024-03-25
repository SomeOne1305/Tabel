import {Oval} from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <Oval width={"3px"} height={"35px"} strokeWidth={"3px"} color='blue'/>
    </div>
  )
}

export default Loader