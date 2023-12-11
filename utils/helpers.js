modules.exports = {
    format_date: (date) => {
        let formatted_date = new Date(date);
        return `${formatted_date.getMonth() + 1}/${formatted_date.getDate()}/${formatted_date.getFullYear()}`;
    },
};