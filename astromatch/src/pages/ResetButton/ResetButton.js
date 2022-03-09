import React from "react"
import { StyledResetButton } from "./styled"
import { reset } from "../../endpoints/query"
import { Fab } from "@material-ui/core"
import CachedIcon from '@material-ui/icons/Cached'

export default function ResetButton() {

    const onClickReset = async () => {

        const response = await reset()

        if (reset === true) {
            throw ("sucess")
        }

    }

    return (
        < StyledResetButton>
            <Fab onClick={onClickReset}> <CachedIcon /> </Fab>
        </ StyledResetButton>
    )
}

