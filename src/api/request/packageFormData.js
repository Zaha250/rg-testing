export function packageFormData(service, attributes = {}) {
    let formData = new FormData();

    formData.append('service[0][name]', service);

    const keys = Object.keys(attributes)
    for (let i in keys) {
        if(typeof attributes[keys[i]] === 'object') {
            const innerObj = attributes[keys[i]]
            const innerObjKeys = Object.keys(attributes[keys[i]])
            for (let k in innerObjKeys) {
                formData.append(`service[0][attributes][${keys[i]}][${innerObjKeys[k]}]`, innerObj[innerObjKeys[k]]);
            }

        } else {
            formData.append(`service[0][attributes][${keys[i]}]`, attributes[keys[i]]);
        }
    }

    return formData;
}
