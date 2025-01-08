import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCategory, deleteCategory } from "src/services/admin";

import Loader from "../modules/Loader";

import styles from "./CategoryList.module.css";

function CategoryList() {
  const queryClient = useQueryClient();
  const { data, isFetching } = useQuery(["get-categories"], getCategory);

  const mutation = useMutation(deleteCategory, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(["get-categories"]);
    },
  });

  const deleteHandler = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className={styles.list}>
      {isFetching ? (
        <Loader />
      ) : (
        data?.data.map((category) => (
          <div key={category._id}>
            <img src={`${category.icon}.svg`} alt={category.name} />
            <h5>{category.name}</h5>
            <p>slug : {category.slug}</p>
            <button onClick={() => deleteHandler(category._id)}>حذف</button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
