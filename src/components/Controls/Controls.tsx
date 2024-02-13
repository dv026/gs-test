import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import { useAtom } from "jotai";
import { styles } from "./styles";
import { Color, Country, Filter, Make } from "../../types/filter";
import { loadingAtom } from "../../atoms/loadingAtom";
import { errorAtom } from "../../atoms/errorAtom";

interface Props {
    filter: Filter;
    setFilter: (filter: Filter) => void;
}

export function Controls({ filter, setFilter }: Props) {
    const [loading] = useAtom(loadingAtom);
    const [error, setError] = useAtom(errorAtom);

    const handleReset = () => {
        setFilter({});
    };

    return (
        <div css={styles.controlsContainer}>
            <FormControl css={styles.formElement}>
                <InputLabel id="make">Make</InputLabel>
                <Select
                    labelId="make"
                    disabled={loading}
                    defaultValue="empty"
                    label="Make"
                    value={filter.make || "empty"}
                    onChange={(event) => {
                        const value = event.target.value;
                        if (value === "empty") {
                            setFilter({});
                        } else {
                            setFilter({
                                make: event.target.value as unknown as Make,
                            });
                        }
                    }}
                >
                    <MenuItem value="empty">Choose one</MenuItem>
                    <MenuItem value="BMW">BMW</MenuItem>
                    <MenuItem value="Audi">Audi</MenuItem>
                    <MenuItem value="Chevrolet">Chvrolet</MenuItem>
                    <MenuItem value="Linkoln">Linkoln</MenuItem>
                    <MenuItem value="Honda">Honda</MenuItem>
                </Select>
            </FormControl>
            <FormControl css={styles.formElement}>
                <InputLabel id="color">Color</InputLabel>
                <Select
                    labelId="color"
                    disabled={loading}
                    label="Color"
                    defaultValue="empty"
                    value={filter.color || "empty"}
                    onChange={(event) => {
                        const value = event.target.value;
                        if (value === "empty") {
                            setFilter({});
                        } else {
                            setFilter({
                                color: event.target.value as unknown as Color,
                            });
                        }
                    }}
                >
                    <MenuItem value="empty">Choose one</MenuItem>
                    <MenuItem value="white">White</MenuItem>
                    <MenuItem value="black">Black</MenuItem>
                    <MenuItem value="blue">Blue</MenuItem>
                    <MenuItem value="grey">Grey</MenuItem>
                </Select>
            </FormControl>
            <FormControl css={styles.formElement}>
                <InputLabel id="country">Country</InputLabel>
                <Select
                    disabled={loading}
                    value={filter.country || "empty"}
                    labelId="country"
                    defaultValue="empty"
                    label="country"
                    onChange={(event) => {
                        const value = event.target.value;
                        if (value === "empty") {
                            setFilter({});
                        } else {
                            setFilter({
                                country: event.target.value as unknown as Country,
                            });
                        }
                    }}
                >
                    <MenuItem value="empty">Choose one</MenuItem>
                    <MenuItem value="Germany">Germany</MenuItem>
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="Japan">Japan</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" onClick={handleReset}>
                Reset
            </Button>
            <FormControlLabel
                control={<Checkbox checked={error} onChange={() => setError((p) => !p)} />}
                label="Next request with error"
            />
        </div>
    );
}
