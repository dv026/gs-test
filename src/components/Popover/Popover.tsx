import { Popover as PopoverMui } from "@mui/material";
import { styles } from "./styles";

interface Props {
    open: boolean;
    anchorEl: EventTarget | null;
    activeStateCount: number | undefined;
    activeId: string;
    handlePopoverClose: () => void;
}

export function Popover({ open, anchorEl, activeId, activeStateCount, handlePopoverClose }: Props) {
    return (
        <PopoverMui
            sx={{
                pointerEvents: "none",
            }}
            open={open}
            anchorEl={anchorEl as Element}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            onClose={handlePopoverClose}
        >
            <div css={styles.popoverBody}>
                <div>{activeId}</div>
                <div>{activeStateCount ? `count - ${activeStateCount}` : "-"}</div>
            </div>
        </PopoverMui>
    );
}
