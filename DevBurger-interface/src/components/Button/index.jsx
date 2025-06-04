import PropTypes from "prop-types";

import { ContainerButton } from "./styles";

export function Button({ children, ...props }) {
    return <ContainerButton {...props}>{children}</ContainerButton>;
}

Button.PropTypes = {
    children: PropTypes.string,
}