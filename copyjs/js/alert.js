
export const hideAlert = () => {
    const alert = document.querySelector('.alert');
    if (alert) alert.parentElement.removeChild(alert);
};

export const showAlert = (type, msg) => {
    hideAlert();
    const viewAlert = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', viewAlert);
    window.setTimeout(hideAlert, 5000);
}