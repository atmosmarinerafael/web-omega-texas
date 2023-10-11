import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`

export const BoxesContainer = styled.div`
    display: flex;
    width: 50vw;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const Box = styled.a`
    width: 5rem;
    height: 3rem;
    background-color: ${props => props.clicked === props.index ? "#E60C79" :  "#024D95" };
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 600;
    border-radius: 5px;
    margin:0.5rem;
    text-decoration: none;

    &:hover {
        background-color: #E60C79;
        cursor: pointer;
    }

    
`