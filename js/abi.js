var abi = [
	
		{
			"inputs": [],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "receiver",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "crm",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "cpf",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "prescricao",
					"type": "string"
				}
			],
			"name": "ReceitasEmitidas",
			"type": "event"
		},
		{
			"inputs": [],
			"name": "doctor",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "receiver",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "crm",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "cpf",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "prescricao",
					"type": "string"
				}
			],
			"name": "newReceita",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "receitas",
			"outputs": [
				{
					"internalType": "string",
					"name": "crm",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "cpf",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "prescricao",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "receiver",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "receiver",
					"type": "address"
				}
			],
			"name": "viewReceita",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]