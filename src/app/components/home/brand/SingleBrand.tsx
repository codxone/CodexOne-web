import Image from "next/image";
import Slider from "react-infinite-logo-slider";

const SingleBrand = ({ brand }: { brand: any }) => {
  const { image, title, darkImg } = brand;

  return (
    <Slider.Slide>
      <div className="flex items-center">
        <Image
          src={image}
          alt={title}
          height={120}
          width={100}
          className="dark:hidden swiper-logo-image "
        />
        <Image
          src={darkImg}
          alt={title}
          height={120}
          width={100}
          className="dark:block hidden swiper-logo-image h-10"
        />
      </div>
    </Slider.Slide>
  );
};

export default SingleBrand;
