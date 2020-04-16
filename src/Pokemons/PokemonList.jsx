import React, {Component} from 'react';
import '../App.css';
import PokemonCard from './PokemonCard'

class PokemonList extends Component {
    render(){
        return (
            <div>
                {this.props.pokemons.length!==0 ?
                    <div className="row justify-content-around">
                        {this.props.pokemons.map((pokemon,i)=>
                            <PokemonCard pokemon={pokemon} key={pokemon.id}/>
                        )}
                    </div>
                :
                    <h3 className="col-1 offset-6 my-4"><i className="fas fa-spinner fa-spin"></i></h3> 
                }
            </div>
        );
    }  
}
export default PokemonList;
