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

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  const handleClick = () => {
    console.log("Button clicked!");
  };

  const price = 29.99;
  const discountedPrice = price * 0.8;

  const isDiscounted = price !== discountedPrice;

  const styles = {
    container: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      backgroundColor: "#f0f0f0",
    },
    button: {
      backgroundColor: isDiscounted ? "red" : "green",
      color: "white",
      padding: "8px 16px",
      borderRadius: "4px",
      cursor: "pointer",
      margin: "10px",
    },
  };

  const handleClickWithParams = (param: string) => {
    console.log("Clicked with param:", param);
  };

  const items = ["Item 1", "Item 2", "Item 3"];
  const itemElements = items.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  const renderItems = () => {
    return (
      <ul>
        {itemElements}
      </ul>
    );
  };

  // More random lines of code
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log("Key pressed:", event.key);
  };

  const user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  };

  const { name, age, email } = user;

  const formattedUserDetails = `
    Name: ${name}
    Age: ${age}
    Email: ${email}
  `;

  const isValid = true;

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
            className="linear rounded-md bg-brand-700 px-10 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
          >
            View Content
          </button>
        </div>

        <div style={styles.container}>
          <p>Current date: {formattedDate}</p>
          <button style={styles.button} onClick={handleClick}>
            Click me!
          </button>
          <p>Price: ${price}</p>
          {isDiscounted && <p>Discounted price: ${discountedPrice}</p>}
          <button onClick={() => handleClickWithParams("Parameter")}>
            Click with param
          </button>
          {renderItems()}
        </div>

        <div>
          <input
            type="text"
            placeholder="Type something..."
            onKeyPress={handleKeyPress}
            className="border border-gray-300 rounded-md px-3 py-2 mt-3 focus:outline-none focus:ring focus:ring-blue-200"
          />
          <p>User details:</p>
          <pre>{formattedUserDetails}</pre>
          {isValid ? <p>User is valid</p> : <p>User is not valid</p>}
        </div>
      </div>

      <div>
        <p>More additional content...</p>
        <p>More UI elements or logic...</p>
      </div>
      
    </Card>
  );
};

export default NftCard;
