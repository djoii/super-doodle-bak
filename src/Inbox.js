import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem, { TodoType } from './TodoItem';
import AddTask from './AddTask';
import moment from 'moment';
import ReactTooltip from 'react-tooltip';

class Inbox extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(TodoType).isRequired,
  }

  render() {
    const now = moment();
    return (
      <div className="inbox-container">
        <div className="title inbox-title">
          <span className="is-size-4" style={{paddingTop: "6px"}}>Inbox</span>
          <div className="inbox-title-right">
            <div className="inbox-title-right-item" 
              style={{fontSize: "14px", marginTop: ".4em"}} 
              data-tip="Project comments">
              <i className="far fa-comment-alt"></i>
               <ReactTooltip effect="solid"/>
            </div>
            <div className="inbox-title-right-item" style={{paddingLeft: "1em", marginTop: "-.1em"}}>
              <img src="/ellipsis.png" alt="" style={{width: "20px"}}/>
            </div>
          </div>
        </div>
        <ul style={{marginLeft: "-1.70em"}}>
        {this.props.todos.map(todo => (
          <li key={todo.name}>
            <TodoItem todo={todo} />
          </li>
        ))}
        </ul>
        <div style={{paddingTop: "1em"}}>
          <AddTask now={now} />
        </div>
      </div>
    );
  }
}

export default Inbox;
