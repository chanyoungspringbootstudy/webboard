import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import BoardList from './BoardList';

@inject('stores')
@observer
class Board extends Component {

    componentDidMount() {
        this.props.stores.PostStore.fetchItems();
    }

    render() {
        let p = this.props.stores.PostStore;
        return (
            <div>
                {p.items && <BoardList items={p.items}/>}
            </div>
        );
    }
}

export default Board;