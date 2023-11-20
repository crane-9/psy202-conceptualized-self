interface RawForm {
    descriptors: string;
    username: string;
};


interface UserData {
    descriptors: number[];
    username: string;
    reviews: number[][];
}


export type { RawForm, UserData };
