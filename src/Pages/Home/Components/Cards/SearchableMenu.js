import { useEffect, useRef, useState } from "react";
const SearchableMenu = ({ titles = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredTitles = titles.filter((title) =>
    title.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="dropdown" ref={dropdownRef}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        onClick={handleToggle}
        placeholder="Search for the holy places..."
        className="dropdown-input"
      />
      {isOpen && (
        <ul className="dropdown-menu">
          {filteredTitles.length > 0 ? (
            filteredTitles.map((item, index) => (
              <li key={index} className="dropdown-item">
                <a href={item.link}>{item.title}</a>
              </li>
            ))
          ) : (
            <li className="dropdown-item">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}
export default SearchableMenu;