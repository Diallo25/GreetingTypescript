// Greeting.tsx
import React from 'react';

// Définition de l'interface des props pour le composant Greeting
interface GreetingProps {
    name: string; // Le prop name est de type string
}

// Composant Greeting qui utilise l'interface GreetingProps
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Bonjour, {name} !</div>;
};

export default Greeting; // Exportation du composant Greeting
