const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToAPI = require("./5-payment");

describe("sendPaymentRequestToAPI", () => {
  let spy;

  beforeEach(() => {
    if (!spy) {
      spy = sinon.spy(console);
    }
  });

  afterEach(() => {
    spy.log.restHistory();
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(spy.log.calledOnceWith("The total is: 120")).to.be.true;
    expect(spy.log.calledOnce).to.be.true;
    spy.restore();
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(spy.log.calledwith("The total is: 20")).to.be.true;
    expect(spy.log.calledOnce).to.be.true;
    spy.log.restore();
  });
});
