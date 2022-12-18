import { Dog } from "../interface/dog.interface"
import { asyncStorageService } from "../servicesJs/basic/async-storage.service"
import { dogsData } from "../data/dog"
import { store } from "../store/store"
import { FilterBy } from "../interface/home/home-interface"


export const dogService = {
    query
}

async function query() {
    let dogs: Dog[] = await asyncStorageService.query('dog')
    console.log(dogs);

    console.log('out');
    if (dogs.length === 0 || !dogs) {
        console.log('in');

        asyncStorageService._save('dog', dogsData)
        dogs = await asyncStorageService.query('dog')
    }
    return dogs
}

export const getFilteredDogs = (filterBy: FilterBy) => {
    let dogs = store.getState().dog.value.dogs
    const { breed, ageRange, sex, sizeAndWeight, willAdoptTwo } = filterBy
    if (breed) dogs = dogs.filter(dog => dog.bread === breed)
    if (sex) dogs = dogs.filter(dog => dog.sex === sex)
    if (willAdoptTwo) dogs = dogs.filter(dog => dog.isAttached)
    return dogs

}