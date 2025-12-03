import { Module } from "@nestjs/common";
import {BioController} from "./bio.controller"
import { BioService } from "./bio.service";
 

@Module({
    controllers : [BioController],
    providers : [BioService]
})
export class BioMOdule{}