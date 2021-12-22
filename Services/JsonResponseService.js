let response = (data, success = true, message = '', status = 200) => {
    return {
        "success": success,
        "message": message,
        "status": status,
        "data": data
    }
}

module.exports = response