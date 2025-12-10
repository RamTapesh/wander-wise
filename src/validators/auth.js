export const loginValidator = [
    body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email"),
    body("password")
    .notEmpty()
    .withMessage("Password is required")
    .Length({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
]