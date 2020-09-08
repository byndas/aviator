import React, { Component } from 'react'
// import UseNewsState from './NewsHooks/UseNewsState';


class ProjectsForm extends Component {
    constructor(props){
        super(props);
        this.state = {name: '', subTitle: '', text: ''}
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
        this.props.createProject(this.state.name, this.state.subTitle, this.state.text)
        this.setState({ name : '',  subTitle: '',  text: '' })
    }
  render(){
      const { name, subTitle, text } = this.state;
    
    return (
        <div className='container'>
            <form onSubmit={this.handleSubmit}>
               <div className="form-group">
                <label htmlFor="name">Name</label>
                <input value={name} name='name' onChange={this.handleChange} type="text" className="form-control" id="name" placeholder="name"/>
              </div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input value={subTitle} name='subTitle' onChange={this.handleChange} type="text" className="form-control" id="SubTitle" placeholder="title"/>
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


export default ProjectsForm;


