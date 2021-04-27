//Contrato
var contratAddress = "0x29C34A384cea1F9fB9727d88edD05a126814f58e";

//Inicia o DApp
document.addEventListener("DOMContentLoaded", onDocumentLoad);
function onDocumentLoad(){
    DApp.init();
}

//Objeto DApp que irá armazenar a instância Web3
const DApp = {
    web3: null,
    contracts: {},
    account: null,
    
    init: function(){
        return DApp.initWeb3();
    },

    //Inicializa o Web3
    initWeb3: async function(){
        if (typeof window.ethereum !== "undefined"){
            try{
                const account = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                DApp.account = accounts[0];
                window.ethereum.on('accountsChanged',DApp.updateAccount);
            } catch (error){
                console.error("Usuário não permitiu acesso do web3");
                return;
            }
            DApp.web3 = new Web3(window.ethereum);
        } else {
            console.error("MetaMask não instalado");
            return;
        }
        return DApp.initContract();
    },

    //Atualiza DApp para a conta atual
    updateAccount: async function(){
        DApp.account = (await DApp.web3.eth.getAccounts())[0];
        atualizaInterface();
    },

    //Associa ao endereço do seu contrato
    initContract: async function(){
        DApp.contracts.Receituario = new DApp.web3.eth.Contract(abi, contratAddress);
        return DApp.render();
    },

    //Inicializa interface
    render: async function(){
        inicializaInterface();
    },
};

//Função ver Receita
function viewReceita() {//function viewReceita(address receiver) public view returns(string memory){
    return DApp.contracts.Receituario.method.viewReceita().call({form: DApp.account});
}

//Função preencher Receita
function newReceita(){ //function newReceita(address receiver, string memory crm, string memory cpf, string memory prescricao) public payable
    let receiver   = document.getElementById("receiver").value;
    let crm        = document.getElementById("crm").value;
    let cpf        = document.getElementById("cpf").value;
    let prescricao = document.getElementById("prescricao").value;
    //alert("Adicionando receituario");
    return DApp.contracts.Receituario.methods.newReceita(receiver, crm, cpf, prescricao).send({from: DApp.account});
}

function inicializaInterface() {
    document.getElementById("bcadastrar").onclick = newReceita;
    //atualizaInterface();
    DApp.contracts.Receituario.getPastEvents("ReceitasEmitidas", { fromBlock: 0, toBlock: "latest" }).then((result) => verEventos(result));  
    DApp.contracts.Receituario.events.ReceitasEmitidas((error, event) => verEventos([event]));  
}

function verEventos(eventos) {
    let table = document.getElementById("events");
    eventos.forEach(evento => {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerHTML = "<a href='https://ropsten.etherscan.io/address/"+ evento["returnValues"]["receiver"] +"'>" + evento["returnValues"]["receiver"] + "</a>";
      let td2 = document.createElement("td");
      td2.innerHTML = evento["returnValues"]["cpf"];
      let td3 = document.createElement("td");  
      td3.innerHTML = "<a href='https://ropsten.etherscan.io/tx/"+ evento["transactionHash"] +"'>" + evento["transactionHash"] + "</a>";
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      table.appendChild(tr);
    });
  }
  