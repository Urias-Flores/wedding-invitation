export function generateCode(lenght = 8) {
    const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";

    for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * values.length);
        code += values[randomIndex];
    }

    return code;
}