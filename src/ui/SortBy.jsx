import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searcParams, setSearchParams] = useSearchParams();
  const sortBy = searcParams.get("sortBy") || "";
  function handleChange(e) {
    searcParams.set("sortBy", e.target.value);
    setSearchParams(searcParams);
  }
  return (
    <Select
      value={sortBy}
      options={options}
      type="white"
      onChange={handleChange}
    />
  );
}

export default SortBy;
