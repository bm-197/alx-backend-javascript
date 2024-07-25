const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = require('chai');


describe('getPaymentTokenFromAPI', () => {
    it('getPaymentTokenFromAPI(true)', () => {
        getPaymentTokenFromAPI(true)
        .then((res) => {
            expect(res).to.deep.equal({data: 'Successful response from the API' });
            done();
        });
    });
});
