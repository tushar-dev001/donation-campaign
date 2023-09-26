import { useEffect, useState } from "react";
import Donate from "./Donate";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState("");
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNoFound("No data found");
    }
  }, []);

  console.log(seeMore);

  return (
    <div>
      {noFound ? (
        <p>{noFound}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {
           seeMore? 
           donation.map((donate) => (
            <Donate key={donate.id} donate={donate}></Donate>
          ))
          :
          donation.slice(0,4).map((donate) => (
            <Donate key={donate.id} donate={donate}></Donate>
          ))
        }
        </div>
      )}
      <div className="text-center"> 
        {
          donation.length > 3 && <button
          onClick={() => setSeeMore(!seeMore)}
          className="bg-orange-600 p-2 text-white rounded-lg mt-4"
        >
          {
            seeMore? "See less": "See more"
          }
        </button>
        }
      </div>
    </div>
  );
};

export default Donation;
