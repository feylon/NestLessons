import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class StudentService {

    students: {
        id: number;
        username: string;
        lastname: string;
        password: string;
    }[] = [
            { id: 1, username: "Ali", lastname: "Sattorov", password: "Ali12345" },
            { id: 2, username: "Vali", lastname: "Rashidov", password: "Vali12345" },
            { id: 3, username: "Olim", lastname: "Turg‘unov", password: "Olim12345" },
            { id: 4, username: "Jasur", lastname: "Mahmudov", password: "Jasur12345" },
            { id: 5, username: "Diyor", lastname: "Qodirov", password: "Diyor12345" },
            { id: 6, username: "Madina", lastname: "Abduvaliyeva", password: "Madina12345" },
            { id: 7, username: "Malika", lastname: "Shukurova", password: "Malika12345" },
            { id: 8, username: "Bobur", lastname: "Xolmatov", password: "Bobur12345" },
            { id: 9, username: "Shohruh", lastname: "Nazarov", password: "Shohruh12345" },
            { id: 10, username: "Sevinch", lastname: "Raxmonova", password: "Sevinch12345" }
        ];
    loginFunction(login : string, password : string) {
        const student = this.students.find(element => element.username == login);
        if(!student) throw new HttpException({
            message : "User topilmadi"
        }, HttpStatus.NOT_FOUND);

        if(student.password ) return {
            message : "Parol mos keldi"
        }
        else throw new HttpException({
            message : "Parol mos kelmadi"
        }, HttpStatus.UNAUTHORIZED);


    }

    getAllStudents() {
        return this.students;
    }


    getStudentById(id: number) {
        const user = this.students.find(element => element.id == id);
        return user;
    }

    deleteStudentFunction(id: number) {
        this.students.splice(id, 1);
        console.log(this.students)
        throw new HttpException("Ma'lumot o'chirildi", HttpStatus.LOCKED);
    }
}
