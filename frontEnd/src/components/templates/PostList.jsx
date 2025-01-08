import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, getPosts } from "src/services/user";

import Loader from "../modules/Loader";
import { sp } from "src/utils/numbers";

import styles from "./PostList.module.css";

function PostList() {
  const queryClient = useQueryClient();
  const { data, isFetching } = useQuery(["my-post-list"], getPosts);
  //   console.log(data);

  const mutation = useMutation(deletePost, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["my-post-list"]);
    },
  });

  const deleteHandler = (id) => {
    mutation.mutate(id);
  };
  return (
    <div>
      {
        <div className={styles.list}>
          {isFetching ? (
            <Loader />
          ) : (
            <>
              <h3>آگهی های من</h3>
              {data?.data.posts.map((post) => (
                <div key={post._id} className={styles.post}>
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`}
                    alt={post.name}
                  />
                  <div>
                    <p>{post.options.title}</p>
                    <span className={styles.content}>
                      {post.options.content}
                    </span>
                  </div>
                  <div className={styles.price}>
                    <p>
                      {new Date(post.createdAt).toLocaleDateString("fa-IR")}
                    </p>
                    <span>{sp(post.amount)} تومان </span>
                  </div>
                  <button onClick={() => deleteHandler(post._id)}>حذف</button>
                </div>
              ))}
            </>
          )}
        </div>
      }
    </div>
  );
}

export default PostList;
