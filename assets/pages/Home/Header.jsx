import { ChevronDown, Search, ShoppingCart, User } from "lucide-react";
import logo from "../../assets/logo.png";
import moile from "../../assets/moile.png";


const Header = () => {
  return (
    <div className="w-full bg-white ">
      <header className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img src={logo} alt="Logo" className="w-28 object-contain" />
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5E0C8C] focus:border-transparent"
              />
            </div>
          </div>
          {/* Icons */}
          <div className="flex items-center space-x-6">
            <div className="flex flex-col items-center cursor-pointer" style={{ color: "#5E0C8C" }}>
              <img src={moile} alt="App" className="w-6 h-6" />
              <span className="text-xs">download app now</span>
            </div>
            <User className="w-6 h-6 cursor-pointer" style={{ color: "#5E0C8C" }} />
            <ShoppingCart className="w-6 h-6 cursor-pointer" style={{ color: "#5E0C8C" }} />
          </div>
        </div>
      </header>
      {/* Navigation */}
      <nav className=" border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-1 sm:space-x-3 py-2 sm:py-4 font-medium" style={{ color: "#5E0C8C" }}>
            {["skin", "body", "hair", "fragrances"].map((item) => (
              <Dropdown
                title={item}
                items={item === "skin" ? ["face wash", "moisturizer", "serum", "sunscreen", "see all"] :
                       item === "body" ? ["body lotion", "body wash", "scrub", "hand cream", "see all"] :
                       item === "hair" ? ["shampoo", "conditioner", "hair oil", "hair mask", "see all"] :
                       item === "fragrances" ? ["perfume", "body mist", "deodorant", "gift sets", "see all"] : []}
              />
            ))}

            <NavLink title="makeup" />
            <NavLink title="combos" />

            <Dropdown
              title="blogs & newsletters"
              items={["beauty blogs", "product launches", "newsletters", "skincare tips", "see all"]}
            />
            <Dropdown
              title="get to know us"
              items={["about us", "our story", "sustainability", "press", "see all"]}
            />
            <Dropdown
              title="help"
              items={["contact us", "FAQ", "shipping info", "returns", "see all"]}
            />
            <NavLink title="careers" />
            <NavLink title="bulk orders" />
          </div>
        </div>
      </nav>
    </div>
  );
};

// Reusable NavLink
const NavLink = ({ title }) => (
  <a href="#" className="hover:underline" style={{ color: "#5E0C8C" }}>
    {title}
  </a>
);

// Reusable Dropdown Menu
const Dropdown = ({
  title,
  items = ["Option 1", "Option 2", "Option 3", "see all"],
}) => (
  <div className="relative group">
    <button className="flex items-center hover:underline" style={{ color: "#5E0C8C" }}>
      {title}
      <ChevronDown className="ml-1 w-4 h-4" />
    </button>
    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
      <div className="py-2">
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`block px-4 py-2 hover:bg-gray-100 ${
              item === "see all" ? "border-t border-gray-100 mt-1" : ""
            }`}
            style={{ color: "#5E0C8C" }}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  </div>
);
export default Header;
