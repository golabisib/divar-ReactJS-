import { useQuery } from "@tanstack/react-query";
import { getCategory } from "src/services/admin";
import Loader from "../modules/Loader";

function Sidebar() {
  const { data, isFetching } = useQuery(["get-categories"], getCategory);

  return (
    <div>
      <h4>zدسته ها</h4>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <ul>
            {data?.data.map((category) => (
              <li key={category._id}>
                <img src={`${category.icon}.svg`} />
                <p>{category.name}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Sidebar;
