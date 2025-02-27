"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
/**
 * A simple logging utility class providing static methods for various log levels.
 * Each log message is prefixed with a timestamp and log level.
 */
class Logger {
    /**
     * Logs an informational message to the console.
     *
     * @param message - The message to be logged.
     * @param context - Optional additional context (object or string) to log alongside the message.
     */
    static info(message, context) {
        console.log(`${new Date().toLocaleString()} [INFO]: ${message}`, context || '');
    }
    /**
     * Logs a warning message to the console.
     *
     * @param message - The message to be logged.
     * @param context - Optional additional context (object or string) to log alongside the message.
     */
    static warn(message, context) {
        console.log(`${new Date().toLocaleString()} [WARNING]: ${message}`, context || '');
    }
    /**
     * Logs an error message to the console.
     *
     * @param message - The message to be logged.
     * @param context - Optional additional context (object or string) to log alongside the message.
     */
    static error(message, context) {
        console.error(`${new Date().toLocaleString()} [ERROR]: ${message}`, context || '');
    }
    /**
     * Logs a debug message to the console.
     *
     * @param message - The message to be logged.
     * @param context - Optional additional context (object or string) to log alongside the message.
     */
    static debug(message, context) {
        console.debug(`${new Date().toLocaleString()} [DEBUG]: ${message}`, context || '');
    }
}
exports.Logger = Logger;
