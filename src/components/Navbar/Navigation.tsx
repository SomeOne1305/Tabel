import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="w-full bg-primary fixed top-0 left-0 shadow-md z-50">
      <div className="container py-2 max-md:py-1 flex items-center justify-between">
        <Link to='/' className="inline-flex items-center">
          <img src={""} alt="logo" />
          <h1 className="text-xl text-white">BravoBlog</h1>
        </Link>
        <div className="p-1 inline-flex items-center">
          <div className="p-1 pb-0 group mx-2 cursor-pointer hover:bg-[#393848fc] rounded-md">
            {/* <IonIcon icon={moonOutline} className='text-xl text-white group-hover:text-blue-500 md hydrated' role='img'/> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation