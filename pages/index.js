import React, {
    Component
  } from 'react';
  import ReactDOM from 'react-dom';
  import Layout from '../components/Layout';
  import {
    Form,
    Modal,
    Header,
    Icon,Item,
    Button,Grid,
    Input,
    Dropdown,
    Menu,
    Radio,
    Message,
    Segment,
    Checkbox,Card,Image,
    Confirm
  } from 'semantic-ui-react';
  import {
    Link,
    Router
  } from '../routes';
  
  import ispeak from '../ethereum/ispeak';
  import web3 from '../ethereum/web3';
  export default class Home extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
       hist2:[],count:"0",disab:[],activeItem1:'Speakers',activeItem2:'Info',activeItem3:'Verifiers'
      };
      this.handleItemClick1 = this.handleItemClick1.bind(this);
      this.handleItemClick2= this.handleItemClick2.bind(this);
      this.handleItemClick3 = this.handleItemClick3.bind(this);
    }
    //handleClose = () => this.setState({ modalOpen: false })
    
  
    
  
    handleChange = (event, {
      name,
      value
    }) => {
      if (this.state.hasOwnProperty(name)) {
        this.setState({
          [name]: value
        });
      }
    }
   
    handleItemClick1(event) {
        event.preventDefault();
      
        Router.pushRoute(`/${this.state.activeItem1}`);
      }
      handleItemClick2(event) {
        event.preventDefault();
      
        Router.pushRoute(`/${this.state.activeItem2}`);
      }
      handleItemClick3(event) {
        event.preventDefault();
      
        Router.pushRoute(`/${this.state.activeItem3}`);
      }
    
  
    render() {
      return ( 
        <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<div className="e-card e-card-horizontal">
  <Segment inverted color='black'>
    
    <Layout>
      <br/>
      <br/>
    
<Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='Speakers'
            active={this.state.activeItem1 === 'Speakers'}
            onClick={this.handleItemClick1}
          />
          
          <Menu.Item
            name='Verifiers'
            active={this.state.activeItem3 === 'Verifiers'}
            onClick={this.handleItemClick3}
          />
          <Menu.Item
            name='Info'
            active={this.state.activeItem2 === 'Info'}
            onClick={this.handleItemClick2}
          />
        </Menu>
      </Segment>
   
    
    <Segment inverted color='grey'>
    <center><Image src='/static/82633.jpg' fluid size="large"/></center>
    <br/><br/>
    <font color="black"><h3>Be a warrior and not a worrier.".Get true and real facts and happenings hidden from you without any bias from authentic people and sources and get a taste of reality rather than being in an illusion.</h3></font>
    
  </Segment>
  </Layout>
  </Segment>
</div>
   </div>
   

      );
    }
  }
  