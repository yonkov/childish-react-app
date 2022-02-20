export default interface User {
    id: string,
    name: string,
    username: string,
    email: string,
    address: AddressObject,
    phone: string,
    website: string,
    company: CompanyObject
}

interface AddressObject {
    street: string,
    suite: string,
    city: string,
    zipcode: string
    geo: {
        lat: string,
        lng: string
    }
}

interface CompanyObject {
    name: string,
    catchPhrase: string,
    bs: string
}