import React from 'react';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
  }


  enterTitle(event) {
    this.setState({ title: event.target.value });
  }

  enterBody(event) {
    this.setState({ body: event.target.value });
  }

  submitForm(event) {
    event.preventDefault();
    let newTodo = Object.assign({}, this.state);
    newTodo.id = new Date().getTime();
    console.log(newTodo);
    this.props.receiveTodo(newTodo);
  }

  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)}>
        <label>Title
          <input type="text" onChange={this.enterTitle.bind(this)}></input>
        </label>

        <br/>
        <br/>

        <label>Body
          <textarea onChange={this.enterBody.bind(this)}></textarea>
        </label>

        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default TodoForm;
