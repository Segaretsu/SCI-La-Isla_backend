import { HttpStatus } from "@nestjs/common";

/**
 * Business exceptions
 */
export class ManagerException {
    constructor(
        private readonly code: number,
        private readonly message: string,
        private readonly detail?: string,
    ) { }

    getCode() {
        return this.code;
    }

    getMessage() {
        return this.message;
    }

    getDetail() {
        return this.detail;
    }
}

/**
 * No result exception
 */
export class NoResultException extends ManagerException {
    constructor(message: string = 'parameter error', detail?: string) {
        super(HttpStatus.NO_CONTENT, message, detail);
    }
}

/**
 * parametric anomaly
 */
export class ParamException extends ManagerException {
    constructor(message: string = 'parameter error', detail?: string) {
        super(HttpStatus.BAD_REQUEST, message, detail);
    }
}

/**
 * Permission exception
 */
export class AuthException extends ManagerException {
    constructor(message: string = 'no access', detail?: string) {
        super(HttpStatus.FORBIDDEN, message, detail);
    }
}

export class ConflictException extends ManagerException {
    constructor(message: string = 'conflict', detail?: string) {
        super(HttpStatus.CONFLICT, message, detail);
    }
}

/**
 * Permission exception
 */
export class UnexpectedException extends ManagerException {
    constructor(message: string = 'internal error', detail?: string) {
        super(HttpStatus.INTERNAL_SERVER_ERROR, message, detail);
    }
}