pragma solidity ^0.7.0;
struct receita{
    address receiver;
    string crm;
    string cpf;
    string prescricao;
}

contract Receituario{
    address public doctor;
    address public receiver;
    mapping (address => receita) public receitas;
    
    //event Sent(address from, address to, receita memory rec);
    event ReceitasEmitidas(address receiver, string crm, string cpf, string prescricao);
    
    constructor() public{
        doctor = msg.sender;
    }
    
    function newReceita(address receiver, string memory crm, string memory cpf, string memory prescricao) public payable{
        //require(crm == ' ' , "É obrigatório o CRM do médico!");
        //require(cpf == " ", "É obrigatório o CPF!");
        //require(prescricao = "", "É obrigatório o preenchimento da prescrição!");
        //cod ++;
        
        receitas[receiver].receiver = receiver;
        receitas[receiver].crm = crm;
        receitas[receiver].cpf = cpf;
        receitas[receiver].prescricao = prescricao;
    
        emit ReceitasEmitidas(receiver, crm, cpf, prescricao);
        //emit Sent(doctor, receiver, receitas[cod]);
    }
    
    function viewReceita() public view returns(string memory){
        return receitas[msg.sender].prescricao;
    }
    
}