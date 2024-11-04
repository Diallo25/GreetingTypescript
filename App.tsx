// App.tsx
import React from 'react';
import Greeting from './Greeting'; // Assurez-vous que le chemin est correct
import Counter from './counter'; // Assurez-vous que le chemin est correct

const App: React.FC = () => {
    return (
        <div>
            {/* Passer une valeur pour la propriété name */}
            <Greeting name="Alice" /> 
            <Counter /> {/* Si vous avez un composant Counter, l'ajouter ici */}
        </div>
    );
};

export default App; // Exportation du composant App
