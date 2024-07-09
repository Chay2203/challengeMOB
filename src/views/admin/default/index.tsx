import  NftCard  from "components/card/NftCard";


const Dashboard = () => {
  return (
    <div>
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
        <NftCard 
          image="https://i.ibb.co/h7YFsts/nft1.png"
          title="7-Day LinkedIn Challenge"
          author="Harshith Presents"
          extra="extra-class-names"
        />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
