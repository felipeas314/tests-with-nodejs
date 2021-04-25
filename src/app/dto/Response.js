class ResponseDTO {

    #status;
    #message;

    constructor(){
        this.#message = 'asdf';
    }

    get messsage(){
        return this.#message;
    }

    set message(message){
        this.#message = message;
    }

    get status(){
        return this.#status
    }

    set status(status){
        this.#status = status;
    }

    toJson(){
        return {
            message: this.#message
        }
    }

    toString(){
        return {
            message: this.#message
        }
    }
}

module.exports = ResponseDTO;