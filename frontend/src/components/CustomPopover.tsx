import Popover, {PopoverPlacement} from "react-native-popover-view";
import { WordInfo } from "../types/Word";
import { useState, useRef } from "react";
import { PopoverData } from "../types/Popover";

const CustomPopover = ({words, anchorPoint}:PopoverData) => {
    const [isVisible, setVisibility] = useState(false)
    
    return (
        <Popover
          isVisible={isVisible}
          from={anchorPoint}
          onRequestClose={() => setVisibility(false)}
          placement={PopoverPlacement.BOTTOM}>
        

        </Popover>
    )
}