import React, { Component } from 'react';

class Pagination extends Component{
    render(){
        return(
            <div >
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <button className="page-link" href="!#" onClick={this.props.gotoPreviousPage} disabled={this.props.page > 1 ? false : true}>&laquo; Prev</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" href="!#" onClick={this.props.gotoNextPage} disabled={this.props.page >= this.props.totalPage ? true : false}>Next &raquo;</button>
                    </li>
                </ul>
            </div>
        )
    }    
}
export default Pagination;