import { useSearchRestaurants } from "@/api/RestaurantApi";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useParams } from "react-router-dom";

const SeachPage = () => {
  const {city} = useParams();
  const { results, isLoading } = useSearchRestaurants(city);
  
  if(isLoading){
    <span>Loading ...</span>
  }

  if(!results?.data || !city){
    return <span>No result found</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 m-4">
      <div id="cuisines-list" >
        insert cuisines here
      </div>
      <div id="main-content" className="flex flex-col gap-5">
        <SearchResultInfo total={results.pagination.total} city={city}/>
        {results.data.map((restaurant)=>(
          <SearchResultCard restaurant={restaurant}/>
        ))}
      </div>
    </div>
  );
}

export default SeachPage;