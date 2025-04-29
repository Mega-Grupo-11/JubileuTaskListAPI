
export class User {
    public id?: number;
    public createdAt?: Date;

    constructor(
        public nome: string,
        public email: string,
        public passwordHash: string,
        id?: number,
        createdAt?: Date
    ) {
        if (id) this.id = id;
        if (createdAt) this.createdAt = createdAt;
    }
}
