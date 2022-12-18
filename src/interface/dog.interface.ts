export interface Dog {
    _id: string;
    name: string;
    imgSrc: {
        thumbnail: string;
        imgs: string[];
    };
    age: number;
    sex: 'זכר' | 'נקבה';
    weightKG: number;
    bread: string;
    isDangerous: boolean;
    reqTimesOutside: number;
    isAttached: string[];
    adoptionCriteria: {
        backyard: string;
        aloneHoursCapability: number;
        livingEnv: string[];
    };
}
