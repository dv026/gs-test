import { styles } from "./styles";

interface Props {
    value: string;
    background: string;
}

export function Pallete({ value, background }: Props) {
    return (
        <div css={styles.palleteContainer}>
            <div css={[styles.pallete, { backgroundColor: background }]}></div>
            <div>{value}</div>
        </div>
    );
}
