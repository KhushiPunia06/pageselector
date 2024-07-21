const { useState } = React;

const PageSelector = () => {
  const [selectedPages, setSelectedPages] = useState([]);

  const handleCheckboxChange = (page) => {
    setSelectedPages(prev =>
      prev.includes(page)
        ? prev.filter(p => p !== page)
        : [...prev, page]
    );
  };

  const handleSubmit = () => {
    console.log('Selected pages:', selectedPages);
    // Add any additional form submission logic here
  };

  return (
    <div className="page-selector">
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              checked={selectedPages.length === 4}
              onChange={() => {
                if (selectedPages.length === 4) {
                  setSelectedPages([]);
                } else {
                  setSelectedPages(['Page 1', 'Page 2', 'Page 3', 'Page 4']);
                }
              }}
            />
            All pages
          </label>
        </li>
        {['Page 1', 'Page 2', 'Page 3', 'Page 4'].map(page => (
          <li key={page}>
            <label>
              <input
                type="checkbox"
                checked={selectedPages.includes(page)}
                onChange={() => handleCheckboxChange(page)}
              />
              {page}
            </label>
          </li>
        ))}
      </ul>
      <button className="done-button" onClick={handleSubmit}>Done</button>
      </div>
  );
};

ReactDOM.render(<PageSelector />, document.getElementById('root'));
