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
    Icon,
    Button,
    Input,
    Dropdown,
    Menu,
    Radio,
    Message,
    Segment,
    Checkbox,
    Confirm
  } from 'semantic-ui-react';
  import {
    DateInput
  } from 'semantic-ui-calendar-react';
  import ispeak from '../ethereum/ispeak';
  import web3 from '../ethereum/web3';
  import ipfs from '../pages/ipfs';
  export default class Speakers extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        options:this.options,
        value:null,
        defcheck:false,
        open:false,
        modalOpen:false,
        title:'',
        description:'',
        verifier:'',buffer:null,ipfshash:''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handlecapture = this.handlecapture.bind(this);
      this.handleonsubmit = this.handleonsubmit.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
      this.handleconf= this.handleconf.bind(this);
    }
    handleonsubmit=async(event)=>{
      event.preventDefault();
        console.log("handle submit");
        console.log(this.state.buffer);
        ipfs.files.add(this.state.buffer,(error,result)=>{
          if(error)
          {
          console.error(error);
          return 
          }
          this.setState({ipfshash:result[0].hash});
          console.log('ipfshash',this.state.ipfshash);
        })
    }
    handlecapture=(event)=>{
      console.log("handle capture");
      event.preventDefault();
        
        const file=event.target.files[0];
        const reader =new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend=()=>{
          this.setState({buffer:Buffer(reader.result)});
          console.log("buffer",this.state.buffer);
        }
       
    }
    //handleClose = () => this.setState({ modalOpen: false })
    handleSubmit = async (event) => {
      event.preventDefault();
      
     
      this.setState({open:true,loading:true});
      //console.log(this.state.id + this.state.toc + this.state.fromc + this.state.fno+this.state.tno+this.state.date+this.state.defcheck+this.state.emailid);
    }
  
    handleCancel = () => this.setState({
      open: false,
      loading: false
    });
    handleconf = async (event) => {
      event.preventDefault();
      this.setState({
        open: false
      });
      //console.log(parseInt(this.state.quant)+10);
      //console.log(this.state.id + this.state.toc + this.state.fromc + this.state.fno+this.state.tno+this.state.date+this.state.defcheck+this.state.emailid);
      try {
        //let reacth;
        //let travel;
        //test = (this.state.id + this.state.toc + this.state.fromc + this.state.expl+this.state.quant).toString();
        //test = test.toLowerCase();
        //console.log(test);
        //reacth = crypt.SHA256(test).toString();
        //console.log(reacth);
        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0]);
        //await trackpass.methods.storegold(reacth,(this.state.id).toString(),(this.state.quant).toString(),(this.state.toc).toString(),(this.state.fromc).toString(),(this.state.expl).toString(),parseInt(this.state.billamt)).send({
          //from: accounts[0]
        //});
        var perm="No";
        await ispeak.methods.setRequest((this.state.ipfshash).toString(),(this.state.title).toString(),(this.state.description).toString(),(this.state.verifier).toString(),perm.toString()).send({
          from: accounts[0]
        });
  
       
        
        
  
        this.setState({
          loading: false,
          title:'',
          ipfshash:'',
          description:'',
          verifier:'',
          defcheck:false
        });
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
          open: false
        });
      }
    }
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
    
    
  
    render() {
      return ( 
        <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <
        Segment inverted color = 'black'>
        <
        Layout >
        <
        h1 > <font color="white">User's Portal</font> < /h1> <
        Segment inverted color = "grey" >
        <
        Message attached header = 'Welcome to your own space!'
        content = 'Speak your heart out here with evidence!'
        icon = "searchengin"
        color = 'black' /
        >
        <
        Form >
        <
        br / >
  
  
        <Form.Group widths='equal'>
        <
        Form.Field >
        <
        Input label = "Title"
        fluid ref = {
          (input) => {
            this.title = input;
          }
        }
        //  labelPosition=""
        value = {
          this.state.title
        }
        onChange = {
          event => this.setState({
            title: event.target.value
          })
        }
        /> 
        </Form.Field>
        </Form.Group>
        <br/>
                <Form.Group widths='equal'>
        <
        Form.Field >
        <
        Input label = "Description"
  
        fluid ref = {
          (input) => {
            this.description = input;
          }
        }
        //labelPosition=""
        value = {
          this.state.description
        }
        onChange = {
          event => this.setState({
            description: event.target.value
          })
        }
        /> 
        </Form.Field>
  
        </Form.Group><br/>
        
            <Form.Group widths='equal'>
        <
        Form.Field >
        <
        Input label = "Verifier"
        fluid ref = {
          (input) => {
            this.verifier = input;
          }
        }
        //  labelPosition=""
        value = {
          this.state.verifier
        }
        onChange = {
          event => this.setState({
            verifier: event.target.value
          })
        }
        /> 
        </ Form.Field>
        </Form.Group>
  
        
        <h2><font color="black">Evidence:</font></h2>
        <form onSubmit={this.handleonsubmit}>
       <input type="file" onChange={this.handlecapture}/>
       <br/>
       <input type="submit" name='Upload' value='Upload' className="btn btn-primary" ></input>
       </form>
       <br/><br/>
        <Form.Field>
        <
        Checkbox label = 'I agree that all the information is correct and properly verified.'
        onChange = {
          event => this.setState({
            defcheck: true
          })
        }
        /> <
        /Form.Field> <
        br / >
        <
        Button loading = {
          this.state.loading
        }
        disabled = {
          this.state.title=='' || this.state.description=='' || this.state.verifier=='' || this.state.ipfshash==''  ||this.state.defcheck==false
        }
        primary onClick = {
          this.handleSubmit
        }
         > Submit < /Button>
         <
        Confirm open = {
          this.state.open
        }
        cancelButton = 'Go Back'
        confirmButton = "Confirm"
        onCancel = {
          this.handleCancel
        }
        onConfirm = {
          this.handleconf
        }
        />
        
        </Form> 
        </Segment> </Layout> </Segment>
        </div>
      );
    }
  }
  