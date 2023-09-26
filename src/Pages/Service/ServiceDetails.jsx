import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceDetails = ({ service }) => {
  const { id, category, description, image_url, title, price } = service || {};
  const textColor = service.color
    ? { background: service.color.text_color }
    : {};

  const handleDonate = () => {
    const addDonation = [];
    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (!donationItems) {
      addDonation.push(service);
      localStorage.setItem("donation", JSON.stringify(addDonation));
      toast("Donation added Successfully!");
    } else {
      const isExist = donationItems.find((service) => service.id == id);
      if (!isExist) {
        addDonation.push(...donationItems, service);
        localStorage.setItem("donation", JSON.stringify(addDonation));
        toast("Donation added Successfully!");
      }else{
        toast("Donation already added!");
      }
    }
  };

  return (
    <div className="">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <div className="mx-auto w-full ml-[500px] text-center relative items-center text-red-500">
        <div className="relative">
          <img src={image_url} alt="" className="w-96" />
          <div className="absolute"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-[385px] h-14 bg-black opacity-50"></div>
        <Link>
          <p
            style={textColor}
            onClick={handleDonate}
            className="absolute bottom-3 left-5 text-white p-2 rounded-lg"
          >
            Donate: ${price}
          </p>
        </Link>
      </div>
      <h2 className="font-bold text-5xl mt-5">{title}</h2>
      <p className="mt-5">{description}</p>
    </div>
  );
};

export default ServiceDetails;
