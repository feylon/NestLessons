import { Injectable } from "@nestjs/common";

@Injectable()
class BioService {

    getBio() {
        return {
            username: "Jamshid",
            age: 23,
            country: "Uzbekistan"
        }
    }
}

export {BioService}