import { Parallax, Pagination, Navigation } from 'swiper/modules';

// Imported Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Imported Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../imageslider.css';

// imported data

const ImageSlider = ({ data }) => {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={800}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage:
              'url(https://static.vecteezy.com/system/resources/thumbnails/000/524/720/small/cartoon-funny-seamless-wide-fantasy-landscape.jpg',
          }}
          data-swiper-parallax="-23%"
        ></div>
        {data.map((data) => (
          <SwiperSlide key={data.id}>
            <div
              className="title"
              data-swiper-parallax="-300"
            >
              <img
                src={data.imageUrl}
                alt="Icon"
                className="icon-image"
              />
            </div>
            <div
              className="subtitle"
              data-swiper-parallax="-200"
            >
              {data.title}
            </div>
            <div
              className="text"
              data-swiper-parallax="-100"
            >
              <p>{data.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSlider;
