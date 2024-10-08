import { useNavigate } from "react-router-dom";
import Card from "components/card";

const NftCard = (props: {
  image: string;
  title: string;
  author: string;
  extra?: string;
}) => {
  const { title, author, image, extra } = props;
  const navigate = useNavigate();

  const handleViewContent = () => {
    navigate('/course'); 
  };

  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          <img
            src={image}
            className="mb-5 h-full w-full rounded-md 3xl:h-full 3xl:w-full"
            alt="title"
          />
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {title}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              By {author}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
        <button
        onClick={handleViewContent}
        className="linear rounded-md bg-brand-700 px-10 py-1 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
        >
          View Content
        </button>
        </div>
      </div>
    </Card>
  );
};

export default NftCard;
