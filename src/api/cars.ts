import { data } from "../mocks/data";
import { Color, Country, Filter, Make } from "../types/filter";
import { StateData } from "../types/stateData";
import { State } from "../types/states";

export const carsApi = {
    getCars: (filter: Filter, withError = false): Promise<StateData[]> => {
        return new Promise((res, rej) => {
            if (withError) {
                rej("Server error");
                return;
            }
            if (filter.color) {
                setTimeout(() => {
                    res(
                        data.map((element) => ({
                            id: element.id as State,
                            count: element.color[filter.color as Color],
                        }))
                    );
                }, 2000);
                return;
            }

            if (filter.country) {
                setTimeout(() => {
                    res(
                        data.map((element) => ({
                            id: element.id as State,
                            count: element.country[filter.country as Country],
                        }))
                    );
                }, 2000);
                return;
            }

            if (filter.make) {
                setTimeout(() => {
                    res(
                        data.map((element) => ({
                            id: element.id as State,
                            count: element.make[filter.make as Make],
                        }))
                    );
                }, 2000);
                return;
            }

            setTimeout(() => {
                res(
                    data.map((element) => ({
                        id: element.id as State,
                        count: element.total,
                    }))
                );
            }, 2000);
        });
    },
};
