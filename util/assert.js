import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js'

function expectStatusCode(response,expectedResCode){
  expect(response.status,'status code').to.equal(expectedResCode)
}

function expectEqualData(response,assertData,caseNaming=null){
  expect(response,caseNaming).to.equal(assertData)
}

export const assert = {
  expect : {
    statusCode : expectStatusCode,
    equal : expectEqualData,
  }
}