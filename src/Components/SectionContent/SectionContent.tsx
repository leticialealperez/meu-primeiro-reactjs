import React from 'react';
import SectionStyled from './SectionStyled';

interface SectionContentProps {
    titulo: string;
    texto: string;
    img: string;
    alt?: string;
    revert?: boolean;
    showButton?: boolean;
}

function SectionContent(props: SectionContentProps) {

    const style: React.CSSProperties = {
        display: 'flex',
        flexDirection: props.revert ? 'column-reverse': 'column'
    }

    return (
        <SectionStyled style={style}>
            <h2>{props.titulo}</h2>
            <p>
                {props.texto}
            </p>
            <img src={props.img} alt={props.alt ?? 'texto alternativo padrão'} /> 
            
            { props.showButton && (
                <button>Clique aqui!</button>
            )}
        </SectionStyled>
    )
}

export default SectionContent;

// props => parametros para nossos componentes