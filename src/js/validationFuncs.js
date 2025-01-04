export const errors = [
    "Please fill this mandatory field",
    "Please enter first and last name only",
    "Please correct your email address",
    "",
]

export function validateName (name) {
    name = name.trim();
    if (name === "") return 0;
    const wordsArray = name.split(/\s+/);
    return wordsArray.length;
}

export function validateEmail (email) {
    email = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}