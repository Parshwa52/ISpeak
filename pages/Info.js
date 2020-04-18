import React, {
    Component
  } from 'react';
  import ReactDOM from 'react-dom';
  
  //import Select from 'react-select';
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
    DateInput
  } from 'semantic-ui-calendar-react';
  import ispeak from '../ethereum/ispeak';
  import web3 from '../ethereum/web3';
  export default class Info extends Component {
    constructor(props) {
      super(props);
     
      this.state = {
       hist2:[]
      };
      this.handleonload = this.handleonload.bind(this);
      this.handleChange = this.handleChange.bind(this);
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
    handleonload=async(event)=>{
      event.preventDefault();
      const accounts = await web3.eth.getAccounts();
      var hashes;
      let requests;
      console.log(accounts[0]);
      
      hashes=await ispeak.methods.gethash().call({
        from: accounts[0]
      });
      console.log(hashes.length);
      var reqarray=new Array(hashes.length);
      var k;
      var count=0;
      for(var i=0;i<hashes.length;i=i+1)
      {
          console.log("i=",i);
          k=await ispeak.methods.getrequest((hashes[i].toString())).call({
              from: accounts[0]
            });
            console.log("k=",k);
          if(k[4]=="Yes")
              {
                reqarray[count]=k;
                count=count+1;
              }
      }
      console.log(reqarray);
      this.setState({hist2:reqarray});
  }
    
  
    render() {
      return ( 
        <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<div className="e-card e-card-horizontal">
  <Segment inverted color='black' onLoad={this.handleonload}>
    
    <Layout>
      <br/>
      <br/>
    <center><h1><u>Recent Proofs to visit</u></h1></center>
    <br/>
    <br/>
    <br/>
    <Card.Group>
    {
     
           this.state.hist2.map(item => (
        
          
            
             <Card>
          <Image src={`https://ipfs.io/ipfs/${item[0]}`}  wrapped ui={false} />
          <Card.Content >
           <Card.Header>{item[1]}</Card.Header>
             <Card.Meta>
           <span className='date' href={`https://ipfs.io/ipfs/${item[0]}`} target="_blank">{item[3]}</span>
             </Card.Meta>
             <Card.Description>
                {item[2]}
             </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui buttons'>
              <Button basic color='green' href={`https://ipfs.io/ipfs/${item[0]}`} target="_blank"> 
                View
              </Button>
             
            </div>
          </Card.Content>
          <span>sample text &nbsp; </span>
      </Card>
      
      
      
            
            
          ))}
  
  </Card.Group>

  </Layout>
  </Segment>
</div>
   </div>
   

      );
    }
  }
  