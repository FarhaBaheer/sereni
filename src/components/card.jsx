function Card({ image, title }) {
  return (
    <div className="bg-white p-12 rounded-3xl shadow-md text-center 
                    hover:shadow-xl hover:scale-105 hover:bg-purple-50
                    transition duration-300 cursor-pointer">

      <img
        src={image}
        alt={title}
        className="w-24 mx-auto mb-4"
      />

      <h2 className="text-lg font-medium text-gray-700">
        {title}
      </h2>

    </div>
  )
}

export default Card

