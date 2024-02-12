import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { carsApi } from "../../api/cars";
import { Controls, Map, Legend } from "../../components";
import { styles } from "./styles";
import { Filter } from "../../types/filter";
import { useAtom } from "jotai";
import { loadingAtom } from "../../atoms/loadingAtom";
import { StateData } from "../../types/stateData";
import { errorAtom } from "../../atoms/errorAtom";

export const Home = () => {
    const [filter, setFilter] = useState<Filter>({});
    const [loading, setLoading] = useAtom(loadingAtom);
    const [stateData, setStateData] = useState<StateData[]>([]);
    const [error, setError] = useAtom(errorAtom);

    function fetchCars() {
        setLoading(true);
        carsApi
            .getCars(filter, error)
            .then(setStateData)
            .catch((e) => {
                setError(false);
                toast.error(e);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchCars();
        // deliberately did not put smth else to dep arr
    }, [filter]);

    return (
        <div css={styles.homePage}>
            <Controls filter={filter} setFilter={setFilter} />
            <div css={styles.loader}>{loading && <CircularProgress />}</div>
            <Map stateData={stateData} />
            <Legend />
        </div>
    );
};
