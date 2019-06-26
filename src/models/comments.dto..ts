import { UserDTO } from './user.dto';

export interface CommentsDTO {
    user : UserDTO;
    createAt: Date;
    description: string;
    _id : String;
}