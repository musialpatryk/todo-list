import { keyframes } from "styled-components";

export const bottomToTopAnimation = keyframes`
    0% { transform: translateY(100%); opacity: 0;}
    100% { transform: translateY(0%); opacity: 1;}
`;

export const fadeInAnimation = keyframes`
    0% { opacity: 0;}
    100% { opacity: 1;}
`;
