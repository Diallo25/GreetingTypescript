import React, { Component } from 'react';

// Définition des types pour l'état du composant Counter
interface CounterState {
    count: number; // Le compteur doit être un nombre
}

// Classe Counter qui étend React.Component avec des props et un état typés
class Counter extends Component<{}, CounterState> {
    // Initialisation de l'état avec un compteur à 0
    state: CounterState = {
        count: 0
    };

    // Méthode pour incrémenter le compteur
    increment = () => {
        this.setState({ count: this.state.count + 1 }); // Met à jour l'état en incrémentant le compteur
    };

    // Méthode de rendu du composant
    render() {
        return (
            <div>
                <p>Count : {this.state.count}</p> {/* Affiche le compteur actuel */}
                <button onClick={this.increment}>Increment</button> {/* Bouton pour incrémenter le compteur */}
            </div>
        );
    }
}

export default Counter; // Exportation du composant
