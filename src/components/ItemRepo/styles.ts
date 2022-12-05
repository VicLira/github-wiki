import styled from "styled-components";

export const ItemContainer = styled.div`
    position: relative;
    width: 80%;

    h3 {
        font-size: 32px;
        color: #fafafa;
    }

    p {
        font-size: 16px;
        color: #fafafa;
        margin-bottom: 20px;

        opacity: 0.8;
    }

    a {
        width: 20%;
        min-width: 200px;
        background-color: #21262d;
        color: #fafafa;

        font-weight: 500;

        display: flex;
        justify-content: center;

        border: 1px solid rgba(240, 246, 252, 0.1);
        box-shadow: var(--color-btn-shadow),var(--color-btn-inset-shadow);
        border-radius: 6px;
        margin-top: 10px;
        
        text-decoration: none;
        padding: 5px 10px;
    }

    a.remove {
        color: #f85149;
    }

    hr {
        background-color: #fafafa60;
        margin: 20px 0;

        width : 100%;
        height: 1px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const LanguageLogo = styled.img`
    width: 64px;
    height: 64px;

    position: absolute;
    top: 0;
    right: 0;
`