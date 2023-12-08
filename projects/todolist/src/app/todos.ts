export class Todo {
    public createdAt: Date;

    constructor(
        public id: number,
        public title: string,
        public content: string,
        public author: string,
        public isComplete: boolean,
        public completedAt: Date | null,
    ) {
        this.createdAt = new Date();
    }
}
