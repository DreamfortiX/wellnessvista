import PropTypes from 'prop-types';

const Button = ({ title, onClick }) => {
  return (
    <button
      className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

// PropTypes validation
Button.propTypes = {
  title: PropTypes.string.isRequired, // title must be a string and is required
  onClick: PropTypes.func.isRequired, // onClick must be a function and is required
};

// Default props (optional)
Button.defaultProps = {
  title: "Default Title",
  onClick: () => {}, // Default no-op function
};

export default Button;
