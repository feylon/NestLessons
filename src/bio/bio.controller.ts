import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { BioService } from "./bio.service"
import { RolesGuard } from "src/Guards/UserGuard";


@Controller('bio')
class BioController {
constructor(private readonly bioService: BioService) {}

    @Get()
    GetBIo() {

        const user = {
            Ismi: "Jamshid"
        }

        // return user;
        return {data : "Bio created"}
        return this.bioService.getBio();


    }


    @Post('create')
    createBIO(){
        return {data : "Bio created"}
    }
}

export { BioController }