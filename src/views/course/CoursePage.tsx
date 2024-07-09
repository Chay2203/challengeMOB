import { useState } from 'react';
import { Link } from 'react-router-dom';
import NftCard from 'components/card/NftCard';
import Sidebar from 'components/sidebar';
import Coursecard from 'components/card/CourseCard';

const CoursePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="mt-5 ml-5">
        <div className="mb-5">
          <Link to="/admin" className="w-max lg:pt-5">
            <div className="flex h-fit items-left hover:cursor-pointer">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
                  fill="#A3AED0"
                />
              </svg>
              <p className="ml-3 text-sm text-gray-600">Back to Dashboard</p>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mr-5">
          <div className="col-span-0">
            <Coursecard 
              image="https://i.ibb.co/h7YFsts/nft1.png"
              title="7-Day LinkedIn Challenge"
              author="Harshith Presents"
              extra="extra-class-names w-full"
            />
          </div>
          <div className="col-span-0">
            <Coursecard
              image="https://i.ibb.co/h7YFsts/nft1.png"
              title="7-Day LinkedIn Challenge"
              author="Harshith Presents"
              extra="extra-class-names w-full"
            />
          </div>
          <div className="col-span-0">
            <Coursecard 
              image="https://i.ibb.co/h7YFsts/nft1.png"
              title="7-Day LinkedIn Challenge"
              author="Harshith Presents"
              extra="extra-class-names w-full"
            />
          </div>
          <div className="col-span-0">
            <Coursecard 
              image="https://i.ibb.co/h7YFsts/nft1.png"
              title="7-Day LinkedIn Challenge"
              author="Harshith Presents"
              extra="extra-class-names w-full"
            />
          </div>
          <div className="col-span-0">
            <Coursecard
              image="https://i.ibb.co/h7YFsts/nft1.png"
              title="7-Day LinkedIn Challenge"
              author="Harshith Presents"
              extra="extra-class-names w-full"
            />
          </div>
          <div className="col-span-0">
            <Coursecard
              image="https://i.ibb.co/h7YFsts/nft1.png"
              title="7-Day LinkedIn Challenge"
              author="Harshith Presents"
              extra="extra-class-names w-full"
            />
          </div>
          <div className="col-span-0">
            <Coursecard 
              image="https://i.ibb.co/h7YFsts/nft1.png"
              title="7-Day LinkedIn Challenge"
              author="Harshith Presents"
              extra="extra-class-names w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
