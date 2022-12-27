import Crypto from "crypto"

export default class Cyphers {
    static encrypt(data: any){
        return new Promise(res => {
            const _hash = Crypto.createHash("sha256")
            _hash.update(data)
            return res(_hash.digest("hex"))
        })
    }
    protected static decrypt(data: any){
        return data
    }
}