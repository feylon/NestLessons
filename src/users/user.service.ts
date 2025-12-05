import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import jwt from "jsonwebtoken"

@Injectable()
export class UserService {
    user: {
        id: number | string,
        firstname: string,
        password: string,
        username: string
    }[] = [
            { id: 1, firstname: "Ali", password: "ali123", username: "ali_user" },
            { id: 2, firstname: "Vali", password: "vali123", username: "vali_user" },
            { id: 3, firstname: "Olim", password: "olim123", username: "olim_user" },
            { id: 4, firstname: "Jasur", password: "jasur123", username: "jasur_user" },
            { id: 5, firstname: "Kamol", password: "kamol123", username: "kamol_user" },
            { id: 6, firstname: "Dilorom", password: "dilo123", username: "dilo_user" },
            { id: 7, firstname: "Malika", password: "mali123", username: "mali_user" },
            { id: 8, firstname: "Bekzod", password: "bek123", username: "bek_user" },
            { id: 9, firstname: "Shahlo", password: "shahlo123", username: "shahlo_user" },
            { id: 10, firstname: "Sardor", password: "sardor123", username: "sardor_user" }
        ];

    loginFunction(login: string, password: string) {
        const findUser = this.user.find(element => { return (element.username == login) });
        if (!findUser) {
            throw new HttpException({ message: "Username topilmadi" }, 401);

        }

        console.log(findUser)
        if (findUser?.password === password) {
            const token = jwt.sign({ id: findUser.id }, process.env.JWTTOKEN as string, { expiresIn: "5h" });
            return token;
        }
        else {
            throw new HttpException({ message: "Parol xato" }, 401)
        }

    }

    getBio(id: number) {
        const findUser = this.user.find(element => element.id == id)
        return {
            id: findUser?.id,
            firstname: findUser?.firstname,
            username: findUser?.username
        };
    }

 
}