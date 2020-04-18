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

  import ispeak from '../ethereum/ispeak';
  import web3 from '../ethereum/web3';
  export default class Verifiers extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
       hist2:[],count:"0",disab:[]
      };
      this.handleonload = this.handleonload.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleaccept = this.handleaccept.bind(this);
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
        //console.log(count);
        const accounts = await web3.eth.getAccounts();
        var hashes;
        let requests;
        console.log(accounts[0]);
        
        hashes=await ispeak.methods.gethash().call({
          from: accounts[0]
        });
        var reqarray=new Array(hashes.length);
        var count1=0;
        for(var i=0;i<hashes.length;i++)
        {
            reqarray[i]=await ispeak.methods.getrequest((hashes[i].toString())).call({
                from: accounts[0]
              });
              if(reqarray[i][4]=="No")
                count1=count1+1;
        }
        var req2=new Array(count1);
        var count3=0;
        for(var i=0;i<hashes.length;i++)
        {
            reqarray[i]=await ispeak.methods.getrequest((hashes[i].toString())).call({
                from: accounts[0]
              });
              if(reqarray[i][4]=="No")
                {
                  req2[count3]=reqarray[i];
                  count3=count3+1;
                }
        }
        this.setState({hist2:req2});
    }
    handleaccept=async(event)=>
    {
        event.preventDefault();
        console.log("h",this.state.hist2);
        var t=document.getElementById('abcd').innerHTML=((this.state.hist2[parseInt((this.state.count).toString())])[0]);
        this.setState({count:parseInt((this.state.count).toString())+parseInt("1")});
        console.log("t",t);
        const accounts = await web3.eth.getAccounts();
        await ispeak.methods.givepermit(t.toString()).send({
          from: accounts[0]
        });
        
    }
    handlereject=async(event)=>{
      const accounts = await web3.eth.getAccounts();
        
      alert("Rejected");
        var perm="Not";
        await ispeak.methods.setRequest((this.state.hist2[parseInt((this.state.count).toString())][0]).toString(),(this.state.hist2[parseInt((this.state.count).toString())][1]).toString(),(this.state.hist2[parseInt((this.state.count).toString())][2]).toString(),(this.state.hist2[parseInt((this.state.count).toString())][3]).toString(),perm.toString()).send({
          from: accounts[0]
        });
     // 
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
    <center><h1><u>Recent Proofs to verify</u></h1></center>
    <br/>
    <br/>
    <Segment inverted color='grey'>
<Item.Group link>
{
           this.state.hist2.map(item => (
        
          <div> <Item>

          <Item.Image size='medium' src={`https://ipfs.io/ipfs/${item[0]}`} />
            <br/><br/>
          <Item.Content>
           <Item.Header href={`https://ipfs.io/ipfs/${item[0]}`} target="_blank"><h3><font color="black">{item[1]}</font></h3></Item.Header>
            <Item.Description><h3>{item[2]}</h3></Item.Description>
           <Item.Description  ><font color="grey" id="abcd">{item[0]}</font></Item.Description>
          </Item.Content>
          <Button icon size='big' onClick={this.handleaccept}>
        <Icon name='check' color='green'/>
      </Button>
      <Button icon size='big' onClick={this.handlereject}>
        <Icon name='cancel' color='red'/>
      </Button>
        </Item><br/><br/></div>
            
            
          ))}
   

    

    
  </Item.Group>
  </Segment>
  </Layout>
  </Segment>
</div>
   </div>
   

      );
    }
  }
  