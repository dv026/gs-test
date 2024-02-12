import { levelColors } from "../../constants/levelColors";
import { Pallete } from "../Pallete/Pallete";
import { styles } from "./styles";

export function Legend() {
    return (
        <div css={styles.legendContainer}>
            <Pallete value="- 0" background={levelColors.level0} />
            <Pallete value="< 5000" background={levelColors.level1} />
            <Pallete value="< 10.000" background={levelColors.level2} />
            <Pallete value="< 25.000" background={levelColors.level3} />
            <Pallete value="< 50.000" background={levelColors.level4} />
            <Pallete value="> 50.000" background={levelColors.level5} />
        </div>
    );
}
