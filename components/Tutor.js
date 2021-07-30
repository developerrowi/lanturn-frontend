import axios from 'axios';

class Tutor extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      tutor: '',
      students: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({tutor: event.target.value});
  }

  updateData(data) {
    console.log(data)
    this.setState({students: data});
    console.log(this.state.students)
  }

  async handleSubmit(event) {
    event.preventDefault();

    const res = await axios.get('http://127.0.0.1:4000/api/getcommonstudents?tutor=' + this.state.tutor)
    const data = res.data
    console.log(data)
    this.updateData(data.Students)
  }

  render() {

    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item"> Search Tutor </li>
        </ul>
        <br/>
        <form className="form-inline" onSubmit={this.handleSubmit}>

          <div className="form-group w-50 d-flex">
            <input className="form-control mr-4 inline" type="email" value={this.state.tutor} onChange={this.handleChange} />
            
            <input type="submit"  className="btn btn-primary btn-sm" value="Search" />
          </div>

        </form>

        <ul className="mt-5">
          {this.state.students.map((email) => (
            <div className="w-100 py-4 pb-2 px-2 border-bottom">{email}</div>
          ))}
        </ul>

      </div>
    );
  }
}

export default Tutor;
