const assert = require('chai').assert;
const expect = require('chai').expect;
const myFunction = require('../app.js');

const input1 = [4, 3, 8, 12, 74, 35];
const input2 = "aarushi";
var input3 = { 
        "flatJSON": false, 
        "i": { "am": { "not": { "so": { "flat": true, "unflat": false } }, "a": "tree" } }, 
        "dates": [ { "day": 1 }, { "day": 8947 } ] 
        }
var input4 = { 
        "flatJSON": false, 
        "i.am.not.so.flat": true, 
        "i.am.not.so.unflat": false, 
        "i.am.a": "tree", 
        "dates.0.day": 1, 
        "dates.1.day": 8947 
        }

describe('App', () => {

  describe('second largest element in array', () => {
    const second = myFunction.secondLargest(input1);
    it('input is expected to be of type array', () => {
      expect(input1).to.be.a('array');
    })

    it('input not expected to be of type string', () => {
      expect(input1).to.not.be.a('string');
    })
    
    it('array expected to be not null', () => {
      expect(input1).to.not.equal(null);
    })

    it('input expected to be not object', () => {
      expect(input1).to.not.be.a('object');
    })

    it('array elements are expected to be of type number', () => {
      for (var idx = 0; idx < input1.length; idx++ ) {
        expect(input1[idx]).to.be.a('number');
      }
    })

    it('array length is expected to be within 1-100', () => {
      expect(input1).to.have.lengthOf.within(1,100);
    })

    it('array length is expected to be greater than 0', () => {
      expect(input1.length).to.be.above(0);
    })

    it('output is expected to be a number', () => {
      expect(second).to.be.a('number');
    })
  })

  describe('frequency of letters in a string', () => {
    const frequency = myFunction.calculateFrequency(input2);
    it('string length is expected to be greater than 0', () => {
      expect(input2.length).to.be.above(0);
    })

    it('input is expected to be of type array', () => {
      expect(input2).to.not.be.a('array');
    })

    it('input not expected to be a number', () => {
      expect(input2).not.to.be.a('number');
    })

    it('input not expected to be null', () => {
      expect(input2).to.not.equal(null);
    })

    it('input is expected to be a string', () => {
      expect(input2).to.be.a('string');
    })

    it('output is expected to be an object', () => {
      expect(frequency).to.be.an('object');
    })
  })

  describe('convert unflat object to flat', () => {
    const flat = myFunction.flatten(input3);
    it('input is expected to be of type object', () => {
      expect(input3).to.be.an('object');
    })
    
    it('input not expected to be of type array', () => {
      expect(input3).to.not.be.a('array');
    })

    it('input not expected to be of type string', () => {
      expect(input3).to.not.be.a('string');
    })

    it('input expected to be not null', () => {
      expect(input3).to.not.equal(null);
    })

    it('input is expected to not include {flatJSON:true}', () => {
      expect(flat).to.not.include('{flatJSON:true}');
    })

    it('output is expected to be of type object', () => {
      expect(input3).to.be.an('object');
    })
  })

  describe('convert flat object to unflat', () => {
    const unflat = myFunction.unflatten(input4);
    it('input is expect be of type object', () => {
      expect(input4).to.be.an('object');
    })

    it('input is expected not to be of type array', () => {
      expect(input4).to.not.be.a('array');
    })

    it('input is expected not to be of type string', () => {
      expect(input4).to.not.be.a('string');
    })

    it('input is expected to be not null', () => {
      expect(input4).to.not.equal(null);
    })

    it('output is expected to be of type object', () => {
      expect(input4).to.be.an('object');
    })
  })
})

