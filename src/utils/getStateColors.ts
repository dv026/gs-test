import { levelColors } from "../constants/levelColors";
import { StateColors } from "../types/stateColor";
import { State } from "../types/states";

export function getStateColors(params: { id: State; count: number }[]): StateColors {
    return params.reduce((stateColors, state) => {
        if (state.count === 0) {
            return {
                ...stateColors,
                [state.id as State]: levelColors.level0,
            };
        }
        if (state.count < 5000) {
            return {
                ...stateColors,
                [state.id as State]: levelColors.level1,
            };
        }
        if (state.count < 10_000) {
            return {
                ...stateColors,
                [state.id as State]: levelColors.level2,
            };
        }
        if (state.count < 25_000) {
            return {
                ...stateColors,
                [state.id as State]: levelColors.level3,
            };
        }
        if (state.count < 50_000) {
            return {
                ...stateColors,
                [state.id as State]: levelColors.level4,
            };
        }

        return {
            ...stateColors,
            [state.id as State]: levelColors.level5,
        };
    }, {});
}
