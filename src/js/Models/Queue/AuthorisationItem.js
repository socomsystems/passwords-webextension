import FeedbackItem from '@js/Models/Queue/FeedbackItem';

export default class AuthorisationItem extends FeedbackItem {

    /**
     *
     * @returns {string}
     */
    getServerId() {
        return this.getTask().server;
    }

    /**
     *
     * @returns {string}
     */
    getLabel() {
        return this.getTask().label;
    }

    /**
     *
     * @returns {boolean}
     */
    requiresPassword() {
        return this.getTask().password;
    }

    /**
     *
     * @returns {boolean}
     */
    requiresToken() {
        return this.getTask().token;
    }

    /**
     *
     * @returns {Object[]}
     */
    getProviders() {
        return this.getTask().providers;
    }

    /**
     *
     * @param value
     * @returns {AuthorisationItem}
     */
    setPassword(value) {
        let result = this.getResult();
        result.password = value;
        this.setResult(result);

        return this;
    }

    /**
     *
     * @returns {*}
     */
    getPassword() {
        let result = this.getResult();

        return result.password;
    }

    /**
     *
     * @param value
     * @returns {AuthorisationItem}
     */
    setToken(value) {
        let result = this.getResult();
        result.token = value;
        this.setResult(result);

        return this;
    }

    /**
     *
     * @returns {*}
     */
    getToken() {
        let result = this.getResult();

        return result.token;
    }

    /**
     *
     * @param value
     * @returns {AuthorisationItem}
     */
    setProvider(value) {
        let result = this.getResult();
        result.provider = value;
        this.setResult(result);

        return this;
    }

    /**
     *
     * @returns {*}
     */
    getProvider() {
        let result = this.getResult();

        return result.provider;
    }
}