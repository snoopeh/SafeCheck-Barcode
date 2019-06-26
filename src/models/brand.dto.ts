import { LikeDTO } from './like.dto';
import { DislikeDTO } from './dislike.dto';
import { CommentsDTO } from './comments.dto.';

export interface BrandDTO {
    id : string;
    name: string;
    description : string;
    isVegan : boolean;
    isCrueltyFree : boolean;
    ative : boolean;
    linkPeta: string;
    link : string;
    brandImage: string;
    like: [LikeDTO];
    dislike: [DislikeDTO];
    comments: [CommentsDTO];
}