import { useLoaderData } from "react-router-dom"
import Banner from "../../components/Banner/Banner"
import Services from "../../components/Services/Services"

const Home = () => {
  const services = useLoaderData()
  return (
    <div>
      <Banner></Banner>
      <Services services= {services}></Services>
    </div>
  )
}

export default Home