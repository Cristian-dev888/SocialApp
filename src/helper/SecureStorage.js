import * as Keychain from 'react-native-keychain';

class AuthenticationStorage {
    static singleInstance = null;

    username = null;
    password = null;

    static getSingleInstance() {
        if(AuthenticationStorage.singleInstance == null){
            AuthenticationStorage.singleInstance = new AuthenticationStorage();
        }
        return AuthenticationStorage.singleInstance;
    }

    async save() {
        try{
            await Keychain.resetGenericPassword();
            await Keychain.setGenericPassword(this.username, this.password);
            return true;
        }catch(err){
            console.warn('Could not save credentials, ' + err)
        }
        return false;
    }

    async getAuth() {
        try{
            const credentials = await Keychain.getGenericPassword();
            
            if(credentials){
                this.username = credentials.username;
                this.password = credentials.password;
                
                return true;
            } else {
                return false;
            }
        }catch (err){
            console.warn('Could not load credentials, ' + err)
        }
    }

    async setAuth(username, password){
        this.username = username;
        this.password = password;
        await this.save()
    }
    
    async reset() {
        try {
            await Keychain.resetGenericPassword();
        } catch (err) {
            console.warn('Could not load credentials, ' + err)
        }
    }
}

export default AuthenticationStorage;