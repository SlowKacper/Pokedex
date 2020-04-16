import React, {Component} from 'react';
import '../App.css';

const ColorsOfType = {
    bug: '#A1C34F',
    electric: '#FFCA1E',
    fairy: '#D7B7F4',
    fighting: '#0E3250',
    fire: '#DE3B0C',
    flying: '#A7A8F7',
    ghost: '#7357A1',
    grass: '#5BCC39',
    ground: '#C38243',
    ice: '#8BF6FD',
    normal: '#C8BAA1',
    poison: '#BC66BD',
    psychic: '#ED7DB9',
    rock: '#969469',
    steel: '#AAA8BB',
    water: '#1D7ED1'
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
                                            <span key={i} className="badge badge-pill mt-1 " style={{backgroundColor: `${ColorsOfType[type]}`}}>
                                                {type.charAt(0).toUpperCase() + type.slice(1)}
                                            </span>
                                        )} 
                                </div>  
                            </div>
                            <div className="row">
                                <div className="col-6 col-xl-5 text-right ">
                                    <div style={{ height:'100%'}}  className="float-left"> 
                                        <div className="text-center"><i className="fa fa-bolt" style={{color:'crimson'}}></i></div> 
                                        <div className="progress" style={{ height:'100%', width: '20px', backgroundColor:'silver'}} >
                                            <div className="progress-bar " role="progressbar" 
                                                style={{
                                                height: `${Math.min(this.props.pokemon.stats.attack,100)}%`,
                                                width: '100%',
                                                backgroundColor: `crimson`                                           
                                            }}>
                                                <small>{this.props.pokemon.stats.attack}</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ height:'100%', width: '20px'}} className="float-left ml-1">
                                        <div className="text-center" style={{color:'green'}}><i className="fa fa-shield-alt"></i></div>    
                                        <div className="progress" style={{ height:'100%', backgroundColor:'silver'}} >
                                            <div className="progress-bar" role="progressbar"
                                                style={{
                                                height: `${Math.min(this.props.pokemon.stats.defense,100)}%`,
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
                            <div className="row align-items-center mt-2">
                                <div className="col-4 text-left">
                                    <i className="fa fa-heart" style={{color:'red'}}></i> HP
                                </div>
                                <div className="col-8">
                                    <div className="progress" style={{backgroundColor:'silver'}}>
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${this.props.pokemon.stats.hp}px`,
                                            backgroundColor: `#4A69FF`
                                            }}
                                        >
                                            <small>{this.props.pokemon.stats.hp}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-4 text-left"> 
                                    Speed
                                </div>
                                <div className="col-8">
                                    <div className="progress"  style={{backgroundColor:'silver'}}>
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                            width: `${this.props.pokemon.stats.speed}px`,
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
