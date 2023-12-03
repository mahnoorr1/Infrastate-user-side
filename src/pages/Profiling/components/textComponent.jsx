import { Typography } from "@mui/material"

const TextComponent = ({text}) => {
    return(
        <Typography
        color={'grey'}
        margin={'2px'}
        >{text}
        </Typography>
    )
}

export default TextComponent;