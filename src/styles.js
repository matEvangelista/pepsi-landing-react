import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: calc(15px + 0.390625vw);
        font-family: 'Roboto', sans-serif;
    }
    * {
        margin: 0;
        padding: 0;
    }
`;

function setColor(can) {
    switch (can) {
        case "normal":
            return "#0261BF";
        case "diet":
            return "#E60C2D";
        default:
            return "#1F1E1F";
    }
}

export const HeaderStyle = styled.header`
    background-color: ${(props) => setColor(props.can)};
    transition: 0.5s;
    position: fixed;
    width: 100%;
    top: 0;
    color: white;
    section {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo-burger-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: 0.5s;
    }

    img {
        height: 4rem;
        padding: 0.5rem 0;
    }

    button {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        height: 2rem;
        background-color: inherit;
        width: 2.6rem;
        border: none;
    }
    .burger-line {
        height: 4px;
        width: 100%;
        background-color: white;
        border-radius: 10px;
        transition: 0.5s;
    }

    button.active {
        div:first-child {
            transform: rotate(45deg);
            transform-origin: top left;
        }

        div:last-child {
            transform: rotate(-45deg);
            transform-origin: bottom left;
        }

        div:nth-child(2) {
            transform: translateX(-100%);
            opacity: 0;
        }
    }

    ul {
        display: flex;
        list-style: none;
        align-items: center;
        gap: 1rem;
    }

    li {
        transition: 0.1s;
        &:hover {
            cursor: pointer;
            opacity: 0.5;
            transform: scale(1.05);
        }
    }

    @media screen and (max-width: 750px) {
        section {
            flex-direction: column;
        }
        .logo-burger-container {
            width: 100%;
            z-index: 3;
            background-color: ${(props) => setColor(props.can)};
        }
        button {
            display: flex;
        }
        ul {
            width: 100%;
            flex-direction: column;
            margin-bottom: 1rem;
        }

        li {
            width: 100%;
        }
        nav {
            position: absolute;
            transform: translateY(-10rem);
            background-color: ${(props) => setColor(props.can)};
            width: 100%;
            text-align: center;
            z-index: -9999;
            transition: 0.5s;
        }
        nav.active {
            transform: translateY(5rem);
        }
    }
`;

export const StyledMain = styled.main`
    background-color: ${(props) => setColor(props.can)};
    transition: 0.5s;
    min-height: calc(100vh - 5rem);
    color: white;
    margin-top: 4.9rem;
    section {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        padding-top: 1.5rem;
        justify-content: space-between;
        align-items: center;
    }
    article {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        width: 100%;
        max-width: 700px;
        margin: auto 0;
    }
    h1 {
        font-size: 4.5rem;
    }

    button {
        border: none;
        padding: 1rem;
        border-radius: 20px;
        font-weight: bold;
        font-size: 0.8rem;
        transition: 0.1s;
        &:hover {
            opacity: 0.5;
            cursor: pointer;
        }
    }

    div {
        width: 12rem;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
    }

    div > img {
        width: 3rem;
        transition: 0.5s;
        &:hover {
            cursor: pointer;
            transform: translateY(-20%);
        }
    }

    @media screen and (max-width: 750px) {
        section {
            flex-direction: column;
            margin-bottom: 1.5rem;
            gap: 1rem
        }
        div {
            padding-bottom: 1rem;
        }
    }
`;
