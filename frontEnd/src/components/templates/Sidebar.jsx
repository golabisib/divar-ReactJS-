import styles from "./Sidebar.module.css";

import PropTypes from "prop-types";

function Sidebar({ categories }) {
  Sidebar.propTypes = {
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          icon: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  };

  return (
    <div className={styles.sideBar}>
      <h4>دسته ها</h4>
      {
        <>
          <ul>
            {categories.data.map((category) => (
              <li key={category._id}>
                <img src={`${category.icon}.svg`} />
                <p>{category.name}</p>
              </li>
            ))}
          </ul>
        </>
      }
    </div>
  );
}

export default Sidebar;
