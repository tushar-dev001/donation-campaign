
const Donate = ({donate}) => {
    // console.log(donate);
    const { id, category, description, image_url, title, price } = donate || {};

    const { card_color, category_background_color, text_color } = donate.color;
//   console.log(donate.color);

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
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl   shadow-md" style={cardColor}>
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none ">
    <img
      src={image_url}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 style={categoryBg} className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal  antialiased">
      {category}
    </h6>
    <h4 style={textColor} className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h4>
    <p style={textColor} className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      Donate: ${price}
    </p>
    <a className="inline-block" href="#">
      <button style={categoryBg}
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white  hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        View Details
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>
    </div>
  )
}

export default Donate