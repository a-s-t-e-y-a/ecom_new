import Filter from "@/Components/Filter";
import SingleGlassItem from "@/Components/SingleGlassItem";
import Layout from "@/Layout/Layout";
import React from "react";
import { useRouter } from "next/router";
import useGetAllProducts from "@/utils/queries/admin/UseProductGetAll";
import Loader from "@/Components/Loader";
import Pagination from "@/Components/Pagination/Pagination";

const Index = () => {
  const router = useRouter();
  const [page, setpage] = React.useState(1);
  const [data, setdata] = React.useState([]);
  // const [isLoading,setLoading]=React.useState(true)
  // const [isError,setError]=React.useState(false)
  const navigateToSingleProduct = (id) => {
    router.push(`/eyewear/${id}`);
  };
  const AllProduct = useGetAllProducts(page);
  React.useEffect(() => {
    if (AllProduct.data) {
      setdata(AllProduct.data);
    }
  }, [page, AllProduct]);
  if (AllProduct.isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (AllProduct.isError) {
    return <> </>;
  }
  return (
    <Layout>
      <section className=" w-full flex px-5 ">
        <div className=" w-fit absolute lg:relative lg:top-0 left-1 top-14  me-5">
          <Filter />
        </div>
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-4 ">
          {data &&
            data.map((val, index) => (
              <div
                key={index}
                onClick={() => navigateToSingleProduct(val?.product_url)}
              >
                <SingleGlassItem value={val} />
              </div>
            ))}
        </div>
      </section>
      <div className=" flex  justify-center my-10 px-10 ">
        <Pagination pages={setpage} curr={page} />
      </div>
    </Layout>
  );
};

export default Index;
