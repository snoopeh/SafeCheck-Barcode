import { BrandDTO } from './brand.dto';
import { IngredientsDTO } from './ingredients.dto';
import { LikeDTO } from './like.dto';
import { DislikeDTO } from './dislike.dto';
import { CommentsDTO } from './comments.dto.';

export interface ProductDTO {
    id : string;
    brand: BrandDTO;
    ingredients : [IngredientsDTO];
    name:string;
    description: string;
    isVegan:boolean;
    isVeganVerify:boolean;
    isCrueltyFreeVerify: boolean;
    isCrueltyFree:boolean;
    barcode: string;
    active:boolean;
    link: boolean;
    linkPeta:boolean;
    like:[LikeDTO];
    dislike:[DislikeDTO];
    productImage:string;
    comments: [CommentsDTO];

}