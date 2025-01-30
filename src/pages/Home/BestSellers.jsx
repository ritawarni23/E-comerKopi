import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const bestSellers = products.filter(
    (item) => item.status && item.status.toLowerCase() === "best sellers"
  );

  return (
    <div
      className="bg-black text-white bg-cover bg-center "
      style={{ backgroundImage: 'url("/images/your-background-image.jpg")' }}>
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold capitalize mb-5">
            Best Sellers
          </h2>
          <p className="text-white/75 capitalize md:w-2/3 mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="mb-16">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 40 },
              1024: { slidesPerView: 4, spaceBetween: 50 },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
            {bestSellers.map((product) => (
              <SwiperSlide key={product.id}>
                <Link to={`/shop/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-all duration-300"
                    onError={(e) => (e.target.src = "/images/default.jpg")} // Gambar default jika error
                  />
                </Link>
                <div className="mt-4 px-4">
                  <h4 className="text-base font-semibold mb-2">
                    {product.title}
                  </h4>
                  <div className="flex justify-between">
                    <p className="text-white/50">{product.category}</p>
                    <p className="font-semibold">${product.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
