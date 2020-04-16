import React, {Component} from 'react';
import '../App.css';

const TYPE_COLORS = {
    bug: '#B1C12E',
    electric: '#FCBC17',
    fairy: '#F4B1F4',
    fighting: '#82551D',
    fire: '#E73B0C',
    flying: '#A3B3F7',
    ghost: '#6060B2',
    grass: '#74C236',
    ground: '#D3B357',
    ice: '#A3E7FD',
    normal: '#C8C4BC',
    poison: '#934594',
    psychic: '#ED4882',
    rock: '#B9A156',
    steel: '#B5B5C3',
    water: '#0A43E0'
  };

class PokemonCard extends Component {
    render(){
        return (
            <div className="col-sm-8 col-md-6 col-xl-4 col-12 mb-3">   
                {this.props.pokemon ?
                    <div  className = "PCard" >
                        <div className="face front col ">
                            <div className="row" style={{backgroundColor: 'lightslategrey', color:'white'}}>
                                <div className="col-6 col-xl-5 text-left mt-1 ">
                                    <h6>
                                        {this.props.pokemon.name.charAt(0).toUpperCase()+ this.props.pokemon.name.slice(1)}
                                    </h6>
                                </div>
                            
                                <div className="col-6 col-xl-7 text-right align-items-center">
                                        {this.props.pokemon.type.map((type,i) =>
                                            <span key={i} className="badge badge-pill mt-1 " style={{backgroundColor: `${TYPE_COLORS[type]}`}}>
                                                {type.charAt(0).toUpperCase() + type.slice(1)}
                                            </span>
                                        )} 
                                </div>  
                            </div>
                            <div className="row">
                                <div className="col-6 col-xl-5 text-right ">
                                    <div style={{ height:'90%'}}  className="float-left"> 
                                        <div className="text-center"><i className="fa fa-bolt" style={{color:'crimson'}}></i></div> 
                                        <div className="progress" style={{ height:'90%', width: '20px', backgroundColor:'silver'}} >
                                            <div className="progress-bar " role="progressbar" 
                                                style={{
                                                height: `${this.props.pokemon.stats.attack}%`,
                                                width: '100%',
                                                backgroundColor: `crimson`                                           
                                            }}>
                                                <small>{this.props.pokemon.stats.attack}</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ height:'90%', width: '20px'}} className="float-left ml-1">
                                        <div className="text-center" style={{color:'green'}}><i className="fa fa-shield-alt"></i></div>    
                                        <div className="progress" style={{ height:'90%', backgroundColor:'silver'}} >
                                            <div className="progress-bar" role="progressbar"
                                                style={{
                                                height: `${this.props.pokemon.stats.defense}%`,
                                                width: '100%',
                                                backgroundColor: `green`,                                                
                                                }}
                                            >
                                                <small>{this.props.pokemon.stats.defense}</small>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-6 col-xl-7 text-left">
                                        <img src={this.props.pokemon.url} className="App-logo" alt="logo" />
                                    </div>
                            
                            </div>
                            <br/>
                            <div className="row align-items-center">
                                <div className="col-4">
                                    <i className="fa fa-heart" style={{color:'red'}}></i> HP
                                </div>
                                <div className="col-8">
                                    <div className="progress" style={{backgroundColor:'silver'}}>
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${this.props.pokemon.stats.hp}%`,
                                            backgroundColor: `blue`
                                            }}
                                        >
                                            <small>{this.props.pokemon.stats.hp}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-4"> 
                                    Speed
                                </div>
                                <div className="col-8">
                                    <div className="progress"  style={{backgroundColor:'silver'}}>
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${this.props.pokemon.stats.speed}%`,
                                            backgroundColor: `gold`
                                            }}
                                        >
                                            <small style={{color:'black'}}>{this.props.pokemon.stats.speed}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div className="face back"/>
                    </div>
                :
                    null
                }           
            </div>            
        );
    }  
}

export default PokemonCard;
