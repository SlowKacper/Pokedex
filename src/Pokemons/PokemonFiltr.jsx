import React, { Component } from 'react';

class PokemonFiltr extends Component{
    constructor(props){
        super(props);
        this.state={
            filtr: null
        }
        this.typeChanged=this.typeChanged.bind(this)
    }

    
    typeChanged(e) {
        if(e.target.value==='none')
            this.setState({ filtr: null });
        else
            this.setState({ filtr: e.target.value });
    }
    render(){
        return(
            <div align="center">
                <div className="input-group App-filter" >
                    <select onChange={this.typeChanged} className="custom-select" style={{minWidth: '40%'}}>
                        <option value="none">Choose Type...</option>
                        <option value="bug">Bug</option>
                        <option value="electric">Electric</option>
                        <option value="fighting">Fighting</option>
                        <option value="fire">Fire</option>
                        <option value="flying">Flying</option>
                        <option value="ghost">Ghost</option>
                        <option value="grass">Grass</option>
                        <option value="ground">Ground</option>
                        <option value="ice">Ice</option>
                        <option value="normal">Normal</option>
                        <option value="poison">Poison</option>
                        <option value="psychic">Psychic</option>
                        <option value="rock">Rock</option>
                        <option value="steel">Steel</option>
                        <option value="water">Water</option>
                    </select>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" onClick={()=> this.props.filtrPokemon(this.state.filtr)} disabled ={this.state.filtr=== null ? true : false}>
                            Filtr
                        </button>
                        <button className="btn btn-warning" type="button" onClick={this.props.clearFiltr}>Clear</button>
                    </div>
                </div>
            </div>
        )
    }    
}
export default PokemonFiltr;