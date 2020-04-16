import React, {Component} from 'react';
import './App.css';
import PokemonList from './Pokemons/PokemonList'
import Pagination from './Pokemons/Pagination'
import PokemonFiltr from './Pokemons/PokemonFiltr'


class App2 extends Component {
  constructor(props){
    super(props);
    this.state={
        pokemons: null,
        PokemonList:[],
        CourentPageNum: 1,
        PokemonPerPage:10,
        CurrentPokemon:[],
        filtrShow: false
    }
  } 

  fetchPokemon=()=>{
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=00&limit=101')
      .then(response => response.json())
      .then(result => this.renderToList(result.results))
  }
  renderToList(pokemons){
    pokemons.map(pokemon =>
      fetch(pokemon.url)
        .then(response => response.json())
        .then(result => 
            this.setState({
                PokemonList: this.state.PokemonList.concat(
                {
                name: result.name,
                id: result.id,
                type: result.types.map(typ=>typ['type']['name']),
                url: result.sprites.front_default,
                stats: {
                          hp: result.stats[5]['base_stat'],
                          speed: result.stats[0]['base_stat'],
                          attack: result.stats[4]['base_stat'],
                          defense: result.stats[3]['base_stat'],
                       }
                }),
              CurrentPokemon: this.state.PokemonList  
            })
          )      
    )       
  }
  componentDidMount(){
      this.fetchPokemon();
    }
  gotoNextPage=()=>{
    this.setState({
        CourentPageNum: this.state.CourentPageNum + 1
    })
    window.scrollTo(0, 0)
  }
  gotoPreviousPage=()=>{
    this.setState({
        CourentPageNum: this.state.CourentPageNum - 1
    })
    window.scrollTo(0, 0)
  }
  filtrPokemon=(filtr)=>{
    this.setState({
        CourentPageNum: 1,    
        CurrentPokemon: this.state.PokemonList.filter(obj => obj.type.includes(filtr))
    })
    this.filtrHandle();
  }
  clearFiltr=()=>{
    this.setState({
        CourentPageNum: 1,    
        CurrentPokemon: this.state.PokemonList
    })
    this.filtrHandle();
  }
  filtrHandle=()=>{
    this.setState({
      filtrShow: !this.state.filtrShow
    })
  }

  render(){
    const TotalPage = this.state.CurrentPokemon.length/this.state.PokemonPerPage;
    const indexOfLastPost = this.state.CourentPageNum * this.state.PokemonPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.PokemonPerPage;
    const CurrentPokemon = this.state.CurrentPokemon.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <div className="App-container ">
        <header className="App-head">
          <label>My Pokedex</label>
        </header>
        <section className="App-content">
          <div className="pt-2" style={{ backgroundColor:'red'}}>
            {this.state.filtrShow ?
              <div>
                <PokemonFiltr 
                  filtrPokemon = {this.filtrPokemon}
                  clearFiltr = {this.clearFiltr}
                  
                />
                <span type="button" onClick={this.filtrHandle}><i className="fa fa-angle-up"></i></span>
              </div>
              
              :
              <span type="button" onClick={this.filtrHandle}><i className="fa fa-angle-down"></i></span>
              } 
              <hr />
          </div>
          <div className="row">            
            <div className="col">   
              {CurrentPokemon.length!==0 ?            
                <PokemonList pokemons = {CurrentPokemon}/>
                :                
                <h3 className="col-1 offset-6 my-4"><i className="fas fa-spinner fa-spin"></i></h3>
                }
            </div>              
          </div>             
          <div className="App-info">
            <hr />
            <Pagination 
              gotoNextPage={this.gotoNextPage}
              gotoPreviousPage={this.gotoPreviousPage}
              page={this.state.CourentPageNum}
              totalPage={TotalPage}
            />
          </div>
        </section>
        <footer className="App-footer">
          &copy; Kacper Słowikowski
        </footer>    
      </div>
    );
  }  
}
export default App2;
