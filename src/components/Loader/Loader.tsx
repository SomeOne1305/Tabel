import {Oval} from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center">
      <Oval width={"45px"} height={"45px"} strokeWidth={"3px"} color='blue'/>
    </div>
  )
}

export default Loader