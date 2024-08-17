import { describe } from "https://jslib.k6.io/k6chaijs/4.3.4.1/index.js";
import { step } from "../../step/step.js";
import { assert } from "../../util/assert.js";
import { utils } from "../../util/util.js";

const expect = assert.expect;
const dataDirectory = '../../data/auth.data.csv'
const data = new utils.parse(dataDirectory, "authData");

export default function createToken() {
  const resp = step.auth.create(data)
  describe("TCA - 01: Create Token", () => {
    expect.statusCode(resp,200);
  });
  return resp;
}
