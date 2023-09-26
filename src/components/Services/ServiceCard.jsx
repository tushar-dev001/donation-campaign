import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {id, category, description, image_url, title } = service || {};
  const { card_color, category_background_color, text_color } = service.color;
  console.log(service.color);

  const cardColor ={
    background: `${card_color}`
  }
  const categoryBg ={
    background: `${category_background_color}`,
    
  }
  const textColor ={
    color: `${text_color}`
  }


  return (
    <div>
      {/* <div className="relative flex w-72 flex-col rounded-xl  text-gray-700" style={cardColor}>
        <div className="relative overflow-hidden rounded-xl w-[420px]">
          <img src={image_url} />
        </div>
        <div className="mr-8">
          <p className="block  font-sans text-lg font-medium " style={{categoryBg, textColor}}>
            {category}
          </p>
          <h4 className="mb-2 block font-sans text-2xl font-semibold ">
            {title}
          </h4>

          <p className="block  font-sans text-base font-medium">
            {description}
          </p>
        </div>
      </div> */}
      <Link to={`/service/${id}`}>
      <div className=" p-4 rounded-lg" style={cardColor}>
        <img src={image_url} alt="" className="bg-cover mx-auto"/>
        <h5 style={categoryBg} className="inline-block p-1 rounded-md mt-2">{category}</h5>
        <h3 style={textColor}>{title}</h3>

      </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
