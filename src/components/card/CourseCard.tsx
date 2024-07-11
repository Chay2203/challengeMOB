import Card from "components/card";

const CourseCard = (props: {
  image: string;
  title: string;
  author: string;
  extra?: string;
  yt_btn?: string;
  res_btn?: string;
  doc_btn?: string;
  do_btn?:string;
  onYouTubeClick: (url: string) => void;
  className?: string;
  isActive: boolean; 
}) => {

  const { title, author, image, extra, yt_btn, doc_btn, res_btn, onYouTubeClick, className, isActive, do_btn } = props;

  const cardStyle = isActive
    ? "flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white"
    : "flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white opacity-50 pointer-events-none";

  const buttonStyle = isActive
    ? "linear rounded-md bg-yellow-500 px-4 sm:px-10 py-2 text-sm sm:text-base font-medium text-black transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:active:opacity-90 w-full sm:w-auto"
    : "linear rounded-md bg-gray-300 px-4 sm:px-10 py-2 text-sm sm:text-base font-medium text-gray-500 w-full sm:w-auto cursor-not-allowed";

  return (
    <Card extra={`${cardStyle} ${extra}`}>
      <div className="h-full w-full">
        <div className="relative w-full">
          <img
            src={image}
            className="mb-5 h-full w-full rounded-md 3xl:h-full 3xl:w-full"
            alt={title}
          />
        </div>
        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {title}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              {author}
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <button
            onClick={() => isActive && yt_btn && onYouTubeClick(yt_btn)}
            className={buttonStyle}
            disabled={!isActive}
          >
            Session
          </button>
          <button 
            onClick={() => isActive && res_btn && window.open(res_btn, '_blank')}
            className="linear rounded-md bg-red-700 px-4 sm:px-15 py-2 text-sm sm:text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90 w-full"
            disabled={!isActive}
          >
            Resources
          </button>
        </div>
        <button 
          onClick={() => isActive && doc_btn && window.open(doc_btn, '_blank')}
          className="linear mt-2 rounded-md bg-brand-900 px-4 sm:px-28 py-2 text-sm sm:text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90 w-full"
          disabled={!isActive}
        >
          Assignment
        </button>
        {do_btn && (
          <button 
            onClick={() => isActive && do_btn && onYouTubeClick(do_btn) }
            className="linear mt-2 rounded-md bg-gray-800 px-4 sm:px-28 py-2 text-sm sm:text-base font-medium text-white transition duration-200 hover:bg-gray-500 active:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:active:opacity-90 w-full"            
            disabled={!isActive}
          >
            Doubts
          </button>
        )}
      </div>
    </Card>
  );
};

export default CourseCard;
