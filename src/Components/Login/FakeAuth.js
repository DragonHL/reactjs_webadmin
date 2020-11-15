

const FakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100) // tạo delay
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100) // tạo delay
    }
}

export default FakeAuth;