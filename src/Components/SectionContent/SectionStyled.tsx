import styled from 'styled-components';



const SectionStyled = styled.section`
    background-color: ${props => props.theme.background};

    h2 {
        font-size: 30px;
        color: red;
        font-family: sans-serif;
    }

    p {
        font-weight: bold;
        text-transform: uppercase;
        color: ${props => props.theme.color ?? 'red'}
    }

    img {
        width: 200px;
    }

`

export default SectionStyled;