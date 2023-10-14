import { Tabs } from "@material-tailwind/react";
import TabsComp from "../../components/Tabs/Tabs";
import { useEffect, useState } from "react";
import axios from "axios";
export default function MenuContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://165.227.138.148:8000/api/Categories")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      {loading ? (
        <p>lod</p>
      ) : (
        <div className="px-[5px] md:px-[30px]">
          <Tabs value="mainmeals">
            <TabsComp data={data} loading={loading} />
          </Tabs>
        </div>
      )}
    </>
  );
}
