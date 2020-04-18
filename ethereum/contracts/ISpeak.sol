pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;
contract ispeak {
    
struct Request {
        string ih;
        string title;
        string description;
        string verifier;
        string permit;
    }
    
    mapping (string => Request) requests;
    string[] public hashes;
    
    function setRequest(string memory _ipfshash,string memory _title,string memory _description,string memory _verifier,string memory _permit) public {
        var request = requests[_ipfshash];
        request.ih=_ipfshash;
        request.title = _title;
        request.description = _description;
        request.verifier = _verifier;
        request.permit=_permit;
        
        hashes.push(_ipfshash) -1;
    }
    
    function gethash() view public returns(string[] memory) {
        return hashes;
    }
    
    function getrequest(string memory ipfshash) view public returns (string[] memory) {
        string[] memory arr=new string[](5);
        arr[0]=requests[ipfshash].ih;
        arr[1]=requests[ipfshash].title;
        arr[2]=requests[ipfshash].description;
        arr[3]=requests[ipfshash].verifier;
        arr[4]=requests[ipfshash].permit;
        return arr;
    }
    
    function countRequests() view public returns (uint) {
        return hashes.length;
    }
    function givepermit(string memory ipfshash) public
    {
        requests[ipfshash].permit="Yes";
    }
}
