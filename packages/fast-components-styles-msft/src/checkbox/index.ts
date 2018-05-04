import { IDesignSystem } from "../design-system";
import { ComponentStyles } from "@microsoft/fast-jss-manager";
import { ICheckboxClassNameContract } from "@microsoft/fast-components-class-name-contracts-base";
import { applyTypeRampConfig } from "../utilities/typography";
import { toPx } from "@microsoft/fast-jss-utilities";
import * as Chroma from "chroma-js";

const styles: ComponentStyles<ICheckboxClassNameContract, IDesignSystem> = {
    checkbox: {
        display: "flex",
        flexDirection: "row"
    },
    checkbox_input: {
        position: "relative",
        cursor: "pointer",
        width: toPx(20),
        height: toPx(20),
        appearance: "none",
        border: `${toPx(1)} solid`,
        borderRadius: toPx(2),
        borderColor: (config: IDesignSystem): string => {
            return Chroma.mix(config.foregroundColor, config.backgroundColor, 0.46).css();
        },
        "&:after, &:before": {
            position: "absolute",
            display: "block",
            content: "''",
            width: "1px",
            backgroundColor: "black"
        },
        "&:focus": {
            outline: "none",
            borderWidth: toPx(2),
            "&:checked": {
                "&:before": {
                    left: toPx(5),
                    top: toPx(9)
                },
                "&:after": {
                    left: toPx(10),
                    top: toPx(4)
                }
            },
            "&:indeterminate": {
                "&:before": {
                    left: toPx(4),
                    top: toPx(4)
                }
            }
        },
        "&:checked": {
            "&:before": {
                height: "5px",
                left: "5px",
                top: "9px",
                transform: "rotate(-45deg)"
            },
            "&:after": {
                height: "11px",
                left: "10px",
                top: "4px",
                transform: "rotate(45deg)"
            }
        },
        "&:indeterminate": {
            "&:before": {
                display: "block",
                left: toPx(4),
                top: toPx(4),
                height: toPx(10),
                width: toPx(10)
            }
        }
    },
    checkbox_label: {
        color: (config: IDesignSystem): string => {
            return config.foregroundColor;
        },
        ...applyTypeRampConfig("t7"),
        marginLeft: toPx(5),
        marginTop: toPx(2)
    },
    checkbox_disabled: {
        "& $checkbox_input, & $checkbox_label": {
            cursor: "default",
            opacity: ".6"
        }
    }
};

export default styles;
