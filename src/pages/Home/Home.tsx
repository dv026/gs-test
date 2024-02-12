import { useCallback, useEffect, useState } from "react";
import { Map } from "../../components";
import { carsApi } from "../../api/cars";
import { Controls } from "../../components/Controls/Controls";
import { styles } from "./styles";
import { Filter } from "../../types/filter";
import { useAtom, useAtomValue } from "jotai";
import { loadingAtom } from "../../atoms/loadingAtom";
import { CircularProgress } from "@mui/material";
import { Legend } from "../../components/Legend/Legend";
import { StateData } from "../../types/stateData";
import { errorAtom } from "../../atoms/errorAtom";
import { toast } from "react-toastify";

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
