import { sp } from "src/utils/numbers";

import PropTypes from "prop-types";

function Main({ posts }) {

  Main.propTypes = {
    posts: PropTypes.shape({
      data: PropTypes.shape({
        posts: PropTypes.arrayOf(
          PropTypes.shape({
            _id: PropTypes.string.isRequired,
            images: PropTypes.arrayOf(PropTypes.string).isRequired,
            name: PropTypes.string.isRequired,
            options: PropTypes.shape({
              title: PropTypes.string.isRequired,
              content: PropTypes.string.isRequired,
            }).isRequired,
            createdAt: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
          })
        ).isRequired,
      }).isRequired,
    }).isRequired,
  };

  return (
    <div>
      {
        <>
          {posts.data.posts.map((post) => (
            <div key={post._id}>
              <div>
                <p>{post.options.title}</p>
                <div>
                    <p>{sp(post.amount)} تومان</p>
                    <span>{post.options.city}</span>
                </div>
              </div>
              <div>
                <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`}
                    alt={post.name}/>
              </div>
            </div>
          ))}
        </>
      }
    </div>
  );
}

export default Main;
