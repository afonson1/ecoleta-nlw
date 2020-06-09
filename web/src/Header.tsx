// COMPONENTE HEADER

// Sempre precisamos importar o react nos nossos componentes, mesmo se não formos utilizá-lo
import React from 'react';

interface HeaderProps {
    // title? para deixar opcional
    title: string;

}

// função que returna qualquer coisa do html
// FC = Function Componnent - Componente escrito em formato de função
// FC é um generic - recebe um parâmetro
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;