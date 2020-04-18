import web3 from './web3';
import ispeak from './build/ispeak.json';

const instance = new web3.eth.Contract(
  JSON.parse(ispeak.interface), '0x31a628704fEC26C4071E8b51845C65a7Ff20B918');

export default instance;
