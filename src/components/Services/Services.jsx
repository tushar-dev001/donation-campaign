import Service from "./ServiceCard";


const Services = ({services}) => {

    console.log(services);

  return (
    <div >
        <h3 className="my-24">Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                services?.map(service => <Service 
                    key={service.id}
                    service={service}
                    ></Service>)
            }
        </div>
    </div>
  )
}

export default Services