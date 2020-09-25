import React, { Component } from 'react'
// import UseNewsState from './NewsHooks/UseNewsState';


class NewsForm extends Component {
    constructor(props){
        super(props);
        this.state = {name: '', title: '', text: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.createNews(this.state.name, this.state.title, this.state.text)
        this.setState({ name : '',  title: '',  text: '' })
    }
  render(){
      const { name, title, text } = this.state;
    return (
        <div style={{width: '50%', marginBottom: '50px'}} className='container'>
            <form onSubmit={this.handleSubmit}>
               <div className="form-group">
                <label htmlFor="name">Name</label>
                <input value={name} name='name' onChange={this.handleChange} type="text" className="form-control" id="name" placeholder="name"/>
              </div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input value={title} name='title' onChange={this.handleChange} type="text" className="form-control" id="title" placeholder="title"/>
              </div>
              <div className="form-group">
                    <label htmlFor="text">Text</label>
                    <textarea value={text} onChange={this.handleChange} className="form-control" id="text" rows="3" name='text'></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="img">image</label>
                    <input  name='img' type="file" className="form-control-file" id="img"/>
                </div>
                <input type='submit' className='btn btn-primary'/>
            </form>
        </div>
    )
 }
}


export default NewsForm;


