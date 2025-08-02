import { useEffect, useState } from "react";
import "./App.scss";
import CustomSelect from "./Components/Select/Select";
import { fetchUsers } from "./api/option";
import type { Option, User } from "./types/option";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage";
import Loader from "./Components/Loader/Loader";

function App() {
  const [options, setOptions] = useState<Option[]>([]);
  const [errorMessage, setErrorMessages] = useState<string | null>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setErrorMessages(null);
      try {
        const data = await fetchUsers();
        const formattedData: Option[] = data.map((user: User) => ({
          id: user.id,
          label: user.name,
        }));
        setOptions(formattedData);
      } catch (error) {
        setErrorMessages((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Wrapp">
      <h1>Custom Select Component</h1>
      {loading && <Loader/>}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {!loading && !errorMessage && (
        <CustomSelect
          options={options}
          onChange={(value) => console.log(value)}
        />
      )}
    </div>
  );
}

export default App;
