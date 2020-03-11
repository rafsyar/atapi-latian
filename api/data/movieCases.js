const arrayNegative = {
	keywordNegative : 
    [
    	{
    		case: 'blank keyword',
    		field: 's',
    		changing: ''
    	},
    	{
    		case: 'sy format',
    		field: 's',
    		changing: 12345
    	}
    ],

	apiKeyNegative :
    [
    	{
    		case: 'blank api key',
    		field: 's',
    		changing: ''
    	},
    	{
    		case: 'wrong api key',
    		field: 's',
    		changing: 12345
    	}
    ]
};

module.exports = {
	arrayNegative
};