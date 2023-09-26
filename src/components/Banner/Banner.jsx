
const Banner = () => {
  return (
    <div className="h-[70vh] bg-orange-200">
        <h2 className="text-center font-bold text-5xl py-[10%]">I Grow By Helping People In Need</h2>
        <div className="text-center">
            <input type="text" placeholder="Search here...." className="py-4 rounded-md mx-auto w-[470px]" />
            <button className="px-5 py-4 rounded-md bg-[#FF444A] text-white">Search</button>
        </div>
    </div>
  )
}

export default Banner