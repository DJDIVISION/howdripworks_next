import {keyframes} from "styled-components";

export const animationOne = {
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: "-100vh",
    }
};

export const animationTwo = {
    in: {
        opacity: 1,
        y: 0,
        scale: 1
        
    },
    out: {
        opacity: 0,
        y: "20vh",
        scale: 0.2
    }
};

export const animationThree = {
    in: {
        opacity: 1,
        x: -300
    },
    out: {
        opacity: 0,
        x: 300
    },
    end: {
        x: 0,
        opacity: 1
    }
};

export const transition = {
    duration: 0.3
};

export const transitionLong = {
    duration: 0.5,
    type: "tween"
}

export const Pulse = keyframes`
    0% {transform: scale(0.95)}
    50% {transform: scale(1)}
    100% {transform: scale(0.95)}
`;

export const TitlePulse = {
    start: {
        scale: 1,
    },
    end: {
        scale: 0.95,
        transition: {
            duration: 2,
            yoyo: "Infinity"
        }
    }
}