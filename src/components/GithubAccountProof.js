var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, SmartContract, state, State, method, Permissions, PublicKey, Signature, } from 'snarkyjs';
// constants
const ORACLE_PUBLIC_KEY = 'B62qqJQ4ys9ZwsBXTBNWopXUJswAh91pYXhpvFW6pCnWQoeGq9FqVSZ';
// smart contract
export class GithubAccountProof extends SmartContract {
    constructor() {
        super(...arguments);
        this.oraclePublicKey = State();
        this.events = {
            verified: PublicKey,
        };
    }
    deploy(args) {
        super.deploy(args);
        this.setPermissions({
            ...Permissions.default(),
            editState: Permissions.proofOrSignature(),
        });
    }
    init() {
        super.init();
        this.oraclePublicKey.set(PublicKey.fromBase58(ORACLE_PUBLIC_KEY));
        // why do we need this?
        // It should probably be used if we want to edit the
        // state inside a method that changes the oraclePublicKey?
        this.requireSignature();
    }
    // Something to think about, on how to structure the logic
    // between the oracle response and smart contract method.
    // Ideally, the oracle would act as a proxy by forwarding
    // the whole json returned by githubUser endpoint.
    // Such logic would make the oracle general purpose.
    // This would allow the oracle to be used by many other smart contracts
    // that have their own logic. For example, this smart contract checks
    // if the response has a key id, that holds a value of int. Any other
    // smart contract could check if user has an email / if registration
    // date is older than X / if account has more than X followers / etc.
    // In fact there are no blockers to implement the above.
    // The response from Github's API could be encoded as a Struct?
    // https://docs.minaprotocol.com/zkapps/snarkyjs-reference#struct
    // or just loop over each key and encode the values to it's type.
    // Currently the logic above is not being implemented. The oracle
    // returns just a single Field that contains either 0 or 1. Based
    // on Github's API response: 0 if response has id key, 1 if hasn't.
    // In other words, the oracle is not general purpose, and checking
    // logic is done inside the oracle, not inside the smart contract.
    // The next step is to refactor this as outlined above and make the
    // oracle general purpose. Additionally, implement one (or more)
    // methods inside the smart contract, that check other attibutes.
    verify(isValidUser, signature, publicKey) {
        // assert state
        const oraclePublicKey = this.oraclePublicKey.get();
        this.oraclePublicKey.assertEquals(oraclePublicKey);
        // assert oracle response and signature validity
        isValidUser.assertEquals(Field('1'));
        const validSignature = signature.verify(oraclePublicKey, [isValidUser]);
        validSignature.assertTrue();
        // at this point, all assertions passed, meaning that the
        // invoker of this method has a proper github profile
        this.emitEvent('verified', publicKey);
    }
}
__decorate([
    state(PublicKey),
    __metadata("design:type", Object)
], GithubAccountProof.prototype, "oraclePublicKey", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Field,
        Signature,
        PublicKey]),
    __metadata("design:returntype", void 0)
], GithubAccountProof.prototype, "verify", null);
//# sourceMappingURL=GithubAccountProof.js.map
