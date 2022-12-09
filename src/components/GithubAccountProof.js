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
const ORACLE_PUBLIC_KEY = 'B62qphyUJg3TjMKi74T2rF8Yer5rQjBr1UyEG7Wg9XEYAHjaSiSqFv1';
// smart contract
export class GithubAccountProof extends SmartContract {
    constructor() {
        super(...arguments);
        this.oraclePublicKey = State();
        // Define contract events
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
    init(zkappKey) {
        super.init(zkappKey);
        this.oraclePublicKey.set(PublicKey.fromBase58(ORACLE_PUBLIC_KEY));
        // not sure if we need this right now
        this.requireSignature();
    }
    verify(isValidUser, signature, publicKey) {
        // assert stuff
        const oraclePublicKey = this.oraclePublicKey.get();
        this.oraclePublicKey.assertEquals(oraclePublicKey);
        isValidUser.assertEquals(Field(1));
        // assert data validity
        const validSignature = signature.verify(oraclePublicKey, [isValidUser]);
        validSignature.assertTrue();
        // emit an event if all is fine
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
    __metadata("design:paramtypes", [Field, Signature, PublicKey]),
    __metadata("design:returntype", void 0)
], GithubAccountProof.prototype, "verify", null);
//# sourceMappingURL=GithubAccountProof.js.map