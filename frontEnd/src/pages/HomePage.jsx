import { useQuery } from "@tanstack/react-query";
import Loader from "src/components/modules/Loader";
import Main from "src/components/templates/Main";
import Sidebar from "src/components/templates/Sidebar";
import { getCategory } from "src/services/admin";
import { getAllPost } from "src/services/main";

const style = { display: "flex", gap: "10px" };

function HomePage() {
  const { data: posts, isFetching: postDataFetching } = useQuery(
    ["post-list"],
    getAllPost
  );
  const { data: categories, isFetching: categoryFetching } = useQuery(
    ["get-categories"],
    getCategory
  );
  return (
    <>
      {postDataFetching || categoryFetching ? (
        <Loader />
      ) : (
        <div style={style}>
          <Sidebar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
