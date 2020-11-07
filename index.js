export default {
    getValue(source, keyValue, defaultValue){
        if (source) {
            if (source[keyValue]) {
                return source[keyValue]
            }else{
                return defaultValue ? defaultValue : 0
            }
        }else{
            return "source is required"
        }
    }
}