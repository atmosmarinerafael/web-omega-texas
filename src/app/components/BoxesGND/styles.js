import styled from "styled-components"

export const BoxesContainer = styled.div`
    display: flex;
    width: 50vw;
    justify-content: space-evenly;
    margin-top: 5rem;
    flex-wrap: wrap;
`

export const Box = styled.a`
    width: 5rem;
    height: 3rem;
    background-color: #024D95;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 600;
    border-radius: 5px;
    margin:0.5rem;

    &:hover {
        background-color: #E60C79;
        cursor: pointer;
    }
`