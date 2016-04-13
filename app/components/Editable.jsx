import React from 'react';

export default class Editable extends React.Component {
  render() {
    const {value, onEdit, onValueClick, editing, ...props} = this.props;

    return (
      <div {...props}>
        {editing ? this.renderEdit() : this.renderValue()}
      </div>
    );
  }
  renderEdit = () => {
  	return <input type='text'  
    	ref={
      	(e) => e ? e.setSelectionRange(0, this.props.value.length) : null
    	}
    	autoFocus={true}
    	defaultValue={this.props.value}
    	onBlur={this.finishEdit}
    	onKeyPress={this.checkEnter} />;
  };
  renderValue = () => {
    const onColorEdit = this.props.onColorEdit;
    const onDelete = this.props.onDelete;

    return (
      <div >
        {onColorEdit ? this.renderColorEdit() : null }
        <span className="value" onClick={this.props.onValueClick}>{this.props.value}</span>
        {onDelete ? this.renderDelete() : null }
      </div>
    );
  };
  renderColorEdit = () => {
    return <button className="options" onClick={this.props.onColorEdit}></button>
  }
  renderDelete = () => {
    return <button style={{
        backgroundColor: this.props.bgcolor
      }} className="delete" onClick={this.props.onDelete}>X</button>;
	};
  checkEnter = (e) => {
    // The user hit *enter*, let's finish up.
    	if(e.key === 'Enter') {
      		this.finishEdit(e);
    	}
  };
  finishEdit = (e) => {

    const value = e.target.value;

    if(this.props.onEdit) {
      this.props.onEdit(value);
    }
	};
}
