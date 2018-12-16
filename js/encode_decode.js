var app = new Vue({
    el: '#main-app',
    data: {
        message: 'Hello Vue!',
        inputContent: '',
        resultContent: '',
        key: '',
        hashMethods:[
            'MD5', 'SHA1', 'SHA3', 'SHA224', 'SHA256', 'SHA384', /*'SHA512', 'RIPEMD160'*/
            'HmacMD5', 'HmacSHA1', 'HmacSHA3', 'HmacSHA224', 'HmacSHA256', 'HmacSHA384'/*, 'HmacSHA512', 'HmacRIPEMD160'*/
        ],
        encodeMethods:[
            'AES', 'TripleDES', 'RC4', 'Rabbit', 'RabbitLegacy', 'EvpKDF'
        ],
        decodeMethods:[
            'AES', 'TripleDES', 'RC4', 'Rabbit', 'RabbitLegacy', 'EvpKDF'
        ]
    },
    methods: {
        calcForHashMethod: function(methodName){
            this.resultContent = CryptoJS[methodName](this.inputContent, this.key);
        },
        encodeMethod: function(methodName){
            this.resultContent = CryptoJS[methodName].encrypt(this.inputContent, this.key).toString();
        },
        decodeMethod: function(methodName){
            var result = CryptoJS[methodName].decrypt(this.inputContent, this.key);
            try{
                result = result.toString(CryptoJS.enc.Utf8);
            }catch(e){
                console.log('to utf-8 failed');
                result = result.toString();
            }
            this.resultContent = result;
        }
         
    }
});